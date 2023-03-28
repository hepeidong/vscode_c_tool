var Fs = require('fs');
const { join } = require('path');
const { getDirname } = require('../getDirname');



module.exports.utils = {
    getFiles(path) {
        return Fs.readdirSync(path);
    },
    
    isFile(path) {
        let stat = Fs.statSync(path);
        return stat.isFile();
    },
    
    isDir(path) {
        let stat = Fs.statSync(path);
        return stat.isDirectory();
    },

    /**
     * 文件是否为预制体文件
     * @param {String} filename 文件名
     * @param {String} type 文件类型后缀
     * @returns 返回是否为指定文件判断结果
     */
    juageFileType(filename, type) {
        let suffix = filename.split('.').pop();
        if (suffix.trim() === type.trim()) {
            return true;
        }
        return false;
    },

    /**
     * 在数组中插入元素
     * @param {any[]} array 
     * @param {any} ele 
     * @param {Number} place 
     */
    insertElement(array, ele, place) {
        if (array.length < place) {
            return;
        }
        for (let i = array.length - 1; i >= place; --i) {
            array[i + 1] = array[i];
            if (i === place) {
                array[i] = ele;
                return;
            }
        }
    },

    cwd(path) {
        var url = '';
        url = join(process.cwd(), path);
        return url;
    },

    nodeCwd(path) {
        return join(getDirname(), path);
    },

    getCommand() {
        const path = this.cwd('command.json');
        const commandStr = Fs.readFileSync(path).toString();
        const command = JSON.parse(commandStr);
        return command;
    }
}