#!/usr/bin/env node

const minimist = require('minimist');
const { getDirname } = require('../getDirname');
const { compilerPath } = require('../src/compilerPath');
const { copy } = require('../src/createProj');
const { utils } = require('../src/utils');
const { join } = require('path');

const command = utils.getCommand();
const opts = {};
for (const k in command) {
    opts[k] = false;
}
const argv = minimist(process.argv.splice(2), opts);

function createProj(path, name, type) {
    if (path) {
        copy(join(path, name), type);
    }
    else {
        copy(join(getDirname(), name), type);
    }
}

const cmd = argv._[0];
if (cmd) {
    if (cmd === command.compilerPath) {
        //编译器安装路径
        const path = argv.p;
        //配置编译器
        compilerPath(path);
        process.exit();
    }
    else if (cmd === command.create) {
        const name = argv.n;
        if (!name) {
            console.error("请指定项目名！");
            process.exit();
        }
        const path = argv.p;
        if (argv.c) {
            //创建C语言项目
            createProj(path, name, "c");
        }
        else {
            //创建C++项目
            createProj(path, name, "cpp");
        }
        process.exit();
    }
}
else {
    console.error(`无法搜索到命令: ${cmd}`);
    process.exit();
}