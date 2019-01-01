# Runs NPM from a consistent context
# Any arguments passed into this function are passed to NPM
param(
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "aeons-end"

Push-Location $node_root
& npm $args
Pop-Location
