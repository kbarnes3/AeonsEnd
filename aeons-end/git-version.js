// This script runs operations *synchronously* which is normally not the best
// approach, but it keeps things simple, readable, and for now is good enough.

const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');
const path = require('path');
const { exec } = require("child_process");

var parentDirectory = path.join(__dirname, '..');
parentDirectory = path.normalize(parentDirectory);
var gitInfo = gitDescribeSync(parentDirectory);

if (!gitInfo.raw) {
    exec("git config --global --add safe.directory " + parentDirectory, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });

    gitInfo = gitDescribeSync(parentDirectory);
}

const versionInfoJson = JSON.stringify(gitInfo, null, 2);

writeFileSync('git-version.json', versionInfoJson);
