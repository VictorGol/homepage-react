# 介绍

用react写的简单的主页，相当于标签存储器

node版本：18.14.1

# 开发运行

```
yarn
```

```
yarn dev
```

# 功能

输入 `bg 图片链接` 可更换背景图片，例如 `bg https://images.unsplash.com/photo-1668876303651-ef4dc5814cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80`

输入 `bgl` 可选择本地图片作为背景图片

输入 `trp 0到1之间的小数` 可设置背景透明度，例如 `trp .2`，不输小数则会设置透明度为0

输入与命令不同的文本后回车可进行搜索，默认是必应搜索，如果以 `bing 文本` 的搜索引擎加文本的格式搜索也是同样效果，可使用的搜索引擎有 `baidu` `bing` `google` `fsou` `brave` `duckduckgo` `sougou` `petal`等。

输入文本会进行命令提示，点击命令会跳转到指定网页，这可以自定义(在 src/views/js/constant.js 里自行修改)

输入文本最后是 `..` 则会清除文本

输入 `*` 会显示所有自定义命令

按上下左右键可以移动背景图到合适位置

与上一版的区别：少了一些我认为不需要的功能

# 打包后本地运行

打包

```
yarn build
```

没安装`http-server`的话安装一下: `npm install http-server -g`

然后在dist目录下运行`http-server -p 5555 -o index.html`就可以了

`5555`是自己设的端口号，`index.html`是要打开的文件

更进一步：可以在任意文件夹里写一个`bat`文件，里面内容是

```
cd D:\xxx\dist

http-server -p 5555 -o index.html
```

然后将它的快捷方式放到桌面或者你觉得方便的地方，双击它就可以了

如果想要运行服务后隐藏cmd，那么这么写：

```
@echo off

if "%1"=="h" goto begin

start mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit

:begin

cd D:\xxx\dist

http-server -p 5555 -o index.html
```

隐藏cmd后想关闭服务：打开`任务管理器`的`服务`，搜索`node.exe`，关闭它就行

或者

通过端口查询pid：`netstat -ano| findstr 5555`

如果pid是6920

[可选]查看这个进程是啥：`tasklist |findstr 6920`

杀掉这个进程：`taskkill /pid 6920 -t -f`

是同样的效果

# 其他

请教了chatgpt帮我优化了代码，好看了许多

和纯用三剑客来写相比，要运行打包后的index.html，不能在浏览器直接打开index.html，只能起一个服务，各有优劣。不过用react写肯定更快就是了。