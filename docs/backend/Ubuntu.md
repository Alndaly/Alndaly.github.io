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