---
title: channels
description: 让django支持多种协议（http+websocket）
---

:::tip
django关于daphne文档：https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/daphne/
:::

## 修改`asgi.py`

```python title=asgi.py
"""
ASGI config for unionUser project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "union.settings")

# Initialize Django ASGI application early to ensure the AppRegistry
# is populated before importing code that may import ORM models.
django_asgi_app = get_asgi_application()

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    # Just HTTP for now. (We can add other protocols later.)
})
```

## 修改`settings.py`

```python title=settings.py
INSTALLED_APPS = [
    'rest_framework',  # 增加这一行
    'corsheaders',  # 这里增加允许跨域请求头配置
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    'channels',
]

ASGI_APPLICATION = 'myproject.wsgi.application'

WSGI_APPLICATION = "union.wsgi.application"

```

## 安装Daphne

可以通过pip安装daphne

```shell
pip install daphne
```

## 用Daphne启动Django

:::note
此时不应该使用`python manage.py runserver`启动项目了！
:::

当Daphne安装完成后，对应的终端命令便可执行以用来开启Daphne进程。

:::note
最简单的使用，`daphne`命令需要传参一个ASGI应用，并且跟随`application`，冒号分隔。
:::

比如对于一个最典型的Django项目，可以输入如下命令：

```shell
daphne myproject.asgi:application
```

这将会在`127.0.0.1:8000`开启一个进程。注意该命令执行位置应该和你的`manage.py`文件同级目录下。