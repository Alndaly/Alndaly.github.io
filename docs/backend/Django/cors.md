---
title: 跨域处理
---

## 安装django-cors-headers

```shell
pip install django-cors-headers
```

## 设置

:::note
注意不要写错单词。
:::

```py title=settings.py

# 允许全部来源
CORS_ORIGIN_ALLOW_ALL = False  # 如果为True，将不使用白名单，并且将接受所有来源。默认为False。

# # 白名单
# CORS_ORIGIN_WHITELIST = [
#     "https://test.example.com",
# ]

# 正则匹配白名单
CORS_ORIGIN_REGEX_WHITELIST = (r'^(https?://)?(\w+\.)?google\.com$', )


INSTALLED_APPS = [
    'simpleui',
    'rest_framework',  # 增加这一行
    'corsheaders',  # 这里增加允许跨域请求头配置
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```
