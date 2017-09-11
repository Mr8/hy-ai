# hy-ai

这是一个 webpack + typescript + react 的样例项目。

## 准备工作

请先安装好：

* node.js（自带 npm 包管理工具）

然后将本项目 clone 到本地，并且在项目根目录下执行：

```
npm install
```

这将会根据 package.json 中描述的依赖安装……一大堆工具，包括 typescript 编译器、webpack 打包工具、react 库等等。

但是这些工具只会安装在项目根目录下的 node_modules 目录下。如果你不再需要它们，可以直接删除 node_modules 目录即可。除此之外对你的系统并没有任何不利的影响。

## 编译并试运行

执行下述命令：

```
npm run dev
```

将会做两件事：

* 编译 src 目录内的代码——编译的结果会输出到 dist 目录下
* 启动一个 webpack 内置的简单 web server，它会在 8080 端口（如果没被其他程序占用的话）监听，因此你可以访问 http://localhost:8080 查看你的程序，并且最酷的是它会监视你的文件修改，动态重编译并且自动刷新！这很有帮助。

## 值得一提

这个项目配置了源代码映射，因此你可以在浏览器中基于 TypeScript 的源码进行查看和调试。

并且它会根据 src/*.tsx 文件自动参照 template.html 生成对应的 html 文件。所以你可以任意的创建多个页面，而不必拘泥。

其他问题问我。

Have fun.
