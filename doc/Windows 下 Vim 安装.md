### Vim 安装以及打开、保存文件

#### 命令行版



#### GUI版

Windows 下的 GUI 版 Vim 叫 Gvim，这里讲 Gvim 的安装。

在 Vim 官网下载 Gvim，在[官网](http://www.vim.org/download.php#pc)找到 `PC: MS-DOS and MS-Windows`，下载 `gvim74.exe`（当前最新版本的7.4）。

![](https://o8l6oohcu.qnssl.com/hi-vim:install.png)

然后像普通 Windows 软件一样安装即可，可以修改安装位置，也可以选择默认。安装完成后会出现三个快捷方式。

![](https://o8l6oohcu.qnssl.com/hi-vim:win-install.png)

区别如下：

> gvim74  正常模式标准的VIM（正常开发的时候用）；
>
> gvim read-only  只读模式的VIM(防误删误改方便查阅代码)；
>
> gvim easy  启动的时候是insert模式，适合普通windows用户的习惯；

这里我们说的 Vim 都是第一个。

### macOS 下 Vim 安装

#### 桌面版

Mac 下的桌面版有 [MacVim](http://macvim-dev.github.io/macvim/) 和 [Vimr](http://vimr.org/)，都是可以直接下载安装的。

#### 命令行版

macOS 自带 Vim，只是版本一般都会落后最新版不少，如果不介意这个问题可以直接使用 Mac 自带的 Vim。

同时如果像装最新的 Vim，推荐使用 [brew](http://brew.sh/index_zh-cn.html) 安装。先安装好 brew，然后执行下面的语句即可。

```shell
Laily@Laily:~|⇒  brew search vim
macvim                        pacvim                        vim ✔                         vimpc
neovim/neovim/neovim ✔        pyvim                         vimpager
Caskroom/versions/macvim-kaoriya
Laily@Laily:~|⇒  brew install vim
```



### Linux 下 Vim 安装

#### 桌面版



#### 命令行版

使用 yum，apt-get 等工具直接安装。

