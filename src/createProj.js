const Fs = require('fs');
const { utils } = require("./utils");
const { join } = require('path');

function copy(dest, type) {
    Fs.mkdirSync(dest);
    const tempPath = utils.cwd("template");
    const files = utils.getFiles(tempPath);
    for (const file of files) {
        const path = join(tempPath, file);
        if (utils.isDir(path)) {
            const dirPath = join(dest, ".vscode");
            if (Fs.mkdirSync(dirPath)) {
                const configFiles = utils.getFiles(path);
                for (const configFile of configFiles) {
                    Fs.copyFileSync(join(path, configFile), dirPath);
                }
            }
        }
        else {
            if (utils.juageFileType(file, type)) {
                Fs.copyFileSync(path, dest);
            }
        }
    }
}

module.exports.copy = copy;