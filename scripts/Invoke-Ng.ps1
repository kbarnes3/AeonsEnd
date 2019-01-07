# Runs ng from a consistent context
# Any arguments passed into this function are passed to ng
param(
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "aeons-end"

Push-Location $node_root
& ng $args
Pop-Location
