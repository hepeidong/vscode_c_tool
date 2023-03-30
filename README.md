# vscode_c_tool
用于在vscode创建C/C++项目的工具

## 介绍
> + 安装
> + 命令行
> + 功能使用
> + 版本

### 安装
> 搭建nodejs环境，并查看是否有nodejs和npm版本 node --version npm --version，如果以确定安装了相应环境，
> 则执行下面命令进行安装：
> *npm install  vscode_c_tool -g*

### 命令行
 > + vscode_c compilerPath -p 本地编译器目录
 > > 例如：vscode_c compilerPath -p D:\mingw\x86_64-8.1.0-release-win32-seh-rt_v6-rev0\mingw64\bin
 > **参数说明:**
 > > + -p    参数p用于指定编译器目录

 > + vscode_c create -c -n 项目名称 -p 项目所在目录
 > > 例如：vscode_c create -c -n MyProj -p E:\C-proj
 > **参数说明:**
 > > + -c    参数c用于指定创建C语言项目
 > > + -cpp  参数cpp用于指定创建C++语言项目
 > > + -n    参数n用于指定项目名称
 > > + -p    参数p用于指定编译器目录

 ### 功能使用
 > 在使用该工具前，请确保本地安装了MinGW编译器，用于编译C/C++，若本地没有MinGW编译器，则到 [MinGW官网]https://sourceforge.net/projects/mingw-w64/files/ 下载。
 > **安装编译器流程**
 > > 把下载的MinGW编译器解压到本地某个目录，此目录就是你的安装目录，然后打开 我的电脑 =》属性 =》高级系统设置 =》环境变量 =》系统变量 =》选择Path =》编辑 =》新建，然后把下载安装的编译器，找到里面的bin目录，例如：D:\mingw\x86_64-8.1.0-release-win32-seh-rt_v6-rev0\mingw64\bin，复制bin目录的路径，放在新建的环境变量，之后一路点击确定即可。最后在vscode编辑器下载一个C/C++插件，开发环境就配置完了。

 ### 版本
 > 该版本工具只适用于Windows电脑。
