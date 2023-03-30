const Fs = require('fs');
const { utils } = require("../utils");
const { join } = require('path');

function copy(dest, type) {
    if (!Fs.existsSync(dest)) {
        Fs.mkdirSync(dest);
    }
    const tempPath = utils.nodeCwd("template");
    const files = utils.getFiles(tempPath);
    for (const file of files) {
        const path = join(tempPath, file); //工具模板文件路径
        if (utils.isDir(path)) {
            const configDirPath = join(dest, ".vscode");
            if (!Fs.existsSync(configDirPath)) {
                Fs.mkdirSync(configDirPath);
                console.log(`创建编译配置目录 [.vscode] 到`, dest);
                const configFiles = utils.getFiles(path);
                for (const configFile of configFiles) {
                    console.log(`生成编译配置文件 [${configFile}] 到`, configDirPath);
                    Fs.copyFileSync(join(path, configFile), join(configDirPath, configFile));
                }
            }
        }
        else {
            if (utils.juageFileType(file, type)) {
                Fs.copyFileSync(path, join(dest, file));
            }
        }
    }
    console.log("项目创建成功！");
}

module.exports.copy = copy;