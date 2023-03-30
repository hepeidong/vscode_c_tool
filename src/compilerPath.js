const Fs = require('fs');
const { join } = require('path');
const { utils } = require('../utils');

const c_cpp_properties_path = utils.nodeCwd("template/.vscode/c_cpp_properties.json");
const c_cpp_properties_buffer = Fs.readFileSync(c_cpp_properties_path);
const c_cpp_properties = JSON.parse(c_cpp_properties_buffer);

const launch_path = utils.nodeCwd("template/.vscode/launch.json");
const launch_buffer = Fs.readFileSync(launch_path);
const launch = JSON.parse(launch_buffer);

const tasks_path = utils.nodeCwd("template/.vscode/tasks.json");
const tasks_buffer = Fs.readFileSync(tasks_path);
const tasks = JSON.parse(tasks_buffer);

function compilerPath(path) {
    c_cpp_properties["configurations"][0]["compilerPath"] = join(path, "g++.exe");
    launch["configurations"][0]["cwd"] = join(path);
    launch["configurations"][0]["miDebuggerPath"] = join(path, "gdb.exe");
    tasks["tasks"][0]["command"] = join(path, "g++.exe");;
    Fs.writeFileSync(c_cpp_properties_path, JSON.stringify(c_cpp_properties, undefined, 4));
    Fs.writeFileSync(launch_path, JSON.stringify(launch, undefined, 4));
    Fs.writeFileSync(tasks_path, JSON.stringify(tasks, undefined, 4));
}

module.exports.compilerPath = compilerPath;