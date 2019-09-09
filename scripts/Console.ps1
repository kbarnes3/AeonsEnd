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
    . $PSScriptRoot\Invoke-Npm.ps1 @args
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
    $ngArgs = @("serve")
    if ($OpenBrowser) {
        $ngArgs += "--open"
    }
    Invoke-Ng -Async:$Async $ngArgs
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

Set-Item function:global:Publish-GitHubPages {
    param([string]$CommitMessage)

    $project_root = Split-Path $PSScriptRoot
    $node_root = Join-Path $project_root "aeons-end"
    Push-Location $node_root
    $params = ""
    if ($CommitMessage) {
        $params = "--message ""$CommitMessage"""
    }
    & ngh $params
    Pop-Location

} -Force

Write-Status "Aeon's End ready"
