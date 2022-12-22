---
title: Nginx技巧和一些问题
---

## 配置`Nginx` `http`自动跳转`https`

```conf {3-5} title="nginx.conf"
server{
    ...
    if ($scheme = http) {
        rewrite ^(.*) https://$host$1 permanent;
    }
    ...
}

```

## Nginx转发后会默认会自动去掉请求头中带有下划线的参数

解决方法如下：

在nginx里的nginx.conf配置文件中的http部分中添加如下配置：

> 记得带上结尾的分号！

```conf
underscores_in_headers on; （默认 underscores_in_headers 为off）
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200716093635506.png)

## Nginx 中文路径乱码问题

```conf {5}
server {
	listen 80;
	#listen [::]:80 default_server;

	charset utf-8; 
	# SSL configuration
	#
	listen 443 ssl;
	#listen [::]:443 ssl default_server;

}
```