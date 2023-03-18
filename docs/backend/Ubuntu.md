## Ubuntu密码重置

:::caution
这看起来更像是一个ubuntu的漏洞，需要注意！
:::

1. 重新启动，一直按SHIFT键来显示GRUB菜单
2. 选第二行Ubuntu的高级选项菜单，回车进入
3. 选第二行突出显示时，按e编辑Grub的启动提示符
4. 按e编辑Grub的启动提示符把ro后面改为`quiet splash rw init=/bin/bash`
5. 修改完后，按ctrl+x或者F10启动系统
6. 启动系统之后，直接就是root用户身份在执行命令了

```shell
passwd xx
passwd
```

7. 重启系统即可

```shell
exec /sbin/init
```

## 在文件变动之后执行特定任务

### 安装`inotify-tools`和`gzip`

```shell
sudo apt-get install inotify-tools gzip
```

### 简单尝试

1. 新建incoming文件夹

```shell
mkdir incoming
```

2. 开始监测

```shell
inotifywatch -v incoming 
```

![](https://upload.sunrise-luckyda.top/image/202303182021568.webp)

3. 新建一个终端窗口

```shell
cd incoming/
touch newfile
```

4. 回到原来的终端窗口

![](https://upload.sunrise-luckyda.top/image/202303182021104.webp)

可以看到有很多事件被记录了

- “create” – 当目标文件夹中有文件被创建了
- “moved_to” – 当一个文件被移到当前文件夹
- ...

### 指定类型监测

**只监测文件创建和移动**

```shell
inotifywatch -v -e create -e moved_to incoming
```

### 执行任务

1. 创建文件夹

```shell
mkdir processed
```

2. 创建脚本`watch-incoming.sh`

```shell
#!/bin/bash

TARGET=~/incoming/
PROCESSED=~/processed/

inotifywait -m -e create -e moved_to --format "%f" $TARGET \
        | while read FILENAME
                do
                        echo Detected $FILENAME, moving and zipping
                        mv "$TARGET/$FILENAME" "$PROCESSED/$FILENAME"
                        gzip "$PROCESSED/$FILENAME"
                done
```

`-m`选项表示无限期的监控和更改。

每次监测到新建或者移动事件后，都会将文件名称传入while循环中的FILENAME，接着执行do中的操作。