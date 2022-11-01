---
title: oauth
---

:::tip
这里记载一些使用这一框架过程中遇到的一些问题。
:::

:::note
在使用了一定时间之后，感觉有很多地方其实还是不能满足自己希望得到的效果，故而把对应仓库fork了一份，自己加以开发，仓库地址[Alndaly/django-oauth-toolkit](https://github.com/Alndaly/django-oauth-toolkit)。

当然，后续会考虑优化代码后提交pr给官方。
:::

官方文档：https://django-oauth-toolkit.readthedocs.io/en/latest/getting_started.html

## 安装模块

```shell
pip install django-oauth-toolkit djangorestframework
```

## 修改配置文件

```python settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'oauth2_provider',   
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    #'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'oauth2_provider.backends.OAuth2Backend',
)
 
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
        # 低版本的oauth2配置为：oauth2_provider.ext.rest_framework.OAuth2Authentication
    )
}
```

## 修改URL

```python urls.py
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
# Create a router and register our viewsets with it.
router = DefaultRouter()
urlpatterns += [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider'))]
```

## 创建用户

```shell
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
# 然后输入帐号和密码
```

## 启动服务

```shell
python manage.py runserver
```

## 添加认证用户

### 打开浏览器输入服务器地址

```
https://127.0.0.1:8000/admin
```

### 登录控制台

### 新增`APPLICATION`(`PASSWORD`认证方式)

#### 进入oauth提供的url

```
http://127.0.0.1:8000/o/applications/register/
```

#### 进入django admin

```
http://127.0.0.1:8000/admin/#/admin/oauth2_provider/application/
```

## 获取`TOKEN`

:::note
此处如果用的原生oauth框架，那么要使用`x-www-form-urlecode`的请求头。
:::

**url**

http://127.0.0.1:8000/o/token/

**参数**

- client_id
- grant_type
- username （这是你账户的用户名，注意如果是自定义的`user``model`，那么需要是你设置好的`USERNAME_FIELD`字段）
- password
- client_secret

**结果**

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202210292009789.png)