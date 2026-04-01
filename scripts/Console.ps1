# Launch a console for the project.
param(
    [switch]$Quick,
    [switch]$Verbose
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "aeons-end"
. $PSScriptRoot\Write-Status.ps1

Write-Status "Aeon's End console"

$modules = Join-Path $node_root "node_modules"
if (Test-Path $modules) {
    if (-Not($Quick)) {
        Push-Location $PSScriptRoot
        $currentBranch = & git rev-parse --abbrev-ref HEAD 2>$null
        if ($currentBranch -eq "trunk") {
            $localSha = & git rev-parse HEAD 2>$null
            $originSha = & git rev-parse origin/trunk 2>$null
            if ($localSha -eq $originSha) {
                Write-Status "Fetching latest changes..."
                & git fetch --all --quiet
                & git merge --ff-only 2>$null
                if (-Not $?) {
                    Write-Status "Warning: fast-forward merge failed, continuing with current state"
                }
            }
        }
        . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
    }
}
else {
    if ($Quick) {
        Write-Warning "No node modules detected, -Quick will be ignored"
    }
    . $PSScriptRoot\Setup.ps1
}

# Register helper functions
Set-Item function:global:Invoke-Npm {
    param([switch]$Async, $NpmArgs)
    . $PSScriptRoot\Invoke-Npm.ps1 -Async:$Async $NpmArgs
} -Force

Set-Item function:global:Invoke-Ng {
    param([switch]$Async, $NgArgs)
    . $PSScriptRoot\Invoke-Ng.ps1 -Async:$Async $NgArgs
} -Force

Set-Item function:global:Start-Server {
    param(
        [switch]$Async,
        [switch]$OpenBrowser
    )
    $npmArgs = @("start")
    if ($OpenBrowser) {
        $npmArgs += "--"
        $npmArgs += "--open"
    }
    Invoke-Npm -Async:$Async $npmArgs
} -Force

Set-Item function:global:Start-Tests {
    param(
        [switch]$Async
    )
    Invoke-Ng -Async:$Async test
} -Force

Set-Item function:global:Invoke-Build {
    Invoke-Npm run-script build
}

Set-Item function:global:Update-DevEnvironment {
    param([switch]$Verbose)
    . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
} -Force

Write-Status "Aeon's End ready"
