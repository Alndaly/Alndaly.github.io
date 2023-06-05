"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7111],{23499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));t(16758);const s={},o="Home Assistant",r={unversionedId:"artificial-intelligence/home-assistant/index",id:"artificial-intelligence/home-assistant/index",title:"Home Assistant",description:"\u4e0b\u8f7d",source:"@site/docs/artificial-intelligence/home-assistant/index.md",sourceDirName:"artificial-intelligence/home-assistant",slug:"/artificial-intelligence/home-assistant/",permalink:"/en/docs/artificial-intelligence/home-assistant/",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/home-assistant/index.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u6a21\u578b\u8c03\u4f18-\u5220\u9664\u5f02\u5e38\u503c\uff08\u7bb1\u578b\u56fe\uff09",permalink:"/en/docs/artificial-intelligence/data-analysis/model-tuning"},next:{title:"keras\u6587\u6863",permalink:"/en/docs/artificial-intelligence/keras/"}},l={},p=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u5916\u7f51\u8bbf\u95ee\uff08\u7ed3\u5408frp\u3001nginx\u3001\u516c\u7f51\u670d\u52a1\u5668\uff09",id:"\u5916\u7f51\u8bbf\u95ee\u7ed3\u5408frpnginx\u516c\u7f51\u670d\u52a1\u5668",level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:3},{value:"frp\u670d\u52a1\u5668\u914d\u7f6e",id:"frp\u670d\u52a1\u5668\u914d\u7f6e",level:2},{value:"frp \u5ba2\u6237\u7aef\u914d\u7f6e",id:"frp-\u5ba2\u6237\u7aef\u914d\u7f6e",level:3},{value:"Home Assistant\u914d\u7f6e",id:"home-assistant\u914d\u7f6e",level:3},{value:"Nginx \u914d\u7f6e",id:"nginx-\u914d\u7f6e",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"home-assistant"},"Home Assistant"),(0,i.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/"},"\u5b98\u7f51\u6587\u6863")),(0,i.kt)("h2",{id:"\u5916\u7f51\u8bbf\u95ee\u7ed3\u5408frpnginx\u516c\u7f51\u670d\u52a1\u5668"},"\u5916\u7f51\u8bbf\u95ee\uff08\u7ed3\u5408frp\u3001nginx\u3001\u516c\u7f51\u670d\u52a1\u5668\uff09"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u914d\u7f6e\u5b8c\u6210\u540e\u4e00\u5b9a\u8981\u5f7b\u5e95\u6e05\u7a7a\u7f51\u9875\u7f13\u5b58\u91cd\u65b0\u767b\u5f55\uff0c\u5426\u5219\u4e0d\u4f1a\u751f\u6548\uff01\uff01\uff01\u5982\u679c\u4fee\u6539\u5b8c\u914d\u7f6e\u4ecd\u7136\u65e0\u6cd5\u751f\u6548\uff0c\u53ef\u4ee5\u6362\u4e2a\u6d4f\u89c8\u5668\u8bd5\u8bd5\u3002")),(0,i.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u670d\u52a1\u5668\uff08\u6811\u8393\u6d3e\u4e4b\u7c7b\u7684\u4e5f\u53ef\u4ee5\uff0c\u6211\u662f\u7528\u7684\u5e9f\u5f03\u7535\u8111\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"frp"),(0,i.kt)("li",{parentName:"ul"},"home assistant"))),(0,i.kt)("li",{parentName:"ul"},"\u516c\u7f51\u670d\u52a1\u5668\uff08\u53ea\u8981\u6709\u516c\u7f51IP\u5373\u53ef\uff0c\u516c\u7f51\u5e26\u5bbd\u6700\u597d\u57285\u4ee5\u4e0a\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"frp"),(0,i.kt)("li",{parentName:"ul"},"nginx")))),(0,i.kt)("h2",{id:"frp\u670d\u52a1\u5668\u914d\u7f6e"},"frp\u670d\u52a1\u5668\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title=frps.ini",title:"frps.ini"},"[common]\n;tcp\u4fe1\u53f7\u4f20\u8f93\u7aef\u53e3\nbind_port = 7000\n;\u63a5\u6536http\u670d\u52a1\u7684\u7aef\u53e3\nvhost_http_port = 8091\n;\u7528\u6765\u9a8c\u8bc1\u662f\u81ea\u5df1\u7684\u4fe1\u53f7\u7684token\nauth_token = token\n\n# frp\u7ba1\u7406\u540e\u53f0\u7aef\u53e3\uff0c\u8bf7\u6309\u81ea\u5df1\u9700\u6c42\u66f4\u6539\ndashboard_port = 7500\n# frp\u7ba1\u7406\u540e\u53f0\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8bf7\u6539\u6210\u81ea\u5df1\u7684\ndashboard_user = your-user\ndashboard_pwd = your-pwd\nenable_prometheus = true\n\n# frp\u65e5\u5fd7\u914d\u7f6e\nlog_file = /var/log/frps.log\nlog_level = info\nlog_max_days = 3\n")),(0,i.kt)("h3",{id:"frp-\u5ba2\u6237\u7aef\u914d\u7f6e"},"frp \u5ba2\u6237\u7aef\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title=frpc.ini",title:"frpc.ini"},"[common]\n; \u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668ip\u5730\u5740\nserver_addr = ***.***.***.***\n; \u8fdc\u7a0b\u7684\u670d\u52a1\u5668\u5f00\u653e\u4fe1\u53f7\u7aef\u53e3\nserver_port = 7000\n; \u7528\u6765\u9a8c\u8bc1\u662f\u4f60\u7684\u670d\u52a1\u5668\u7684token\uff0c\u548c\u670d\u52a1\u5668\u4e0a\u7684\u4fdd\u6301\u4e00\u81f4\nauth_token = your-token  \n\n[ha]\ntype = http\n; \u4f60\u7684home assistant\u670d\u52a1\u7684IP\nlocal_ip = 127.0.0.1\n; \u4f60\u7684home assistant\u670d\u52a1\u7684\u7aef\u53e3\nlocal_port = 8123 \ncustom_domains = your domaim\n")),(0,i.kt)("h3",{id:"home-assistant\u914d\u7f6e"},"Home Assistant\u914d\u7f6e"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662fdocker\u65b9\u5f0f\u62c9\u53d6\u7684Home Assistant\uff0c\u90a3\u4e48\u9700\u8981\u5148\u8fdb\u5165\u5bb9\u5668\u5185\u4fee\u6539\u8fd9\u4e00\u6587\u4ef6\u3002"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5bb9\u5668\u7684ID")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker ps -a\n")),(0,i.kt)("ol",{parentName:"admonition",start:2},(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u8be5\u5bb9\u5668")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -it <\u5bb9\u5668ID> /bin/bash\n")),(0,i.kt)("ol",{parentName:"admonition",start:3},(0,i.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u6587\u4ef6")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vi configuration.yaml\n")),(0,i.kt)("ol",{parentName:"admonition",start:4},(0,i.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u9000\u51fa")),(0,i.kt)("p",{parentName:"admonition"},"w+q"),(0,i.kt)("ol",{parentName:"admonition",start:5},(0,i.kt)("li",{parentName:"ol"},"\u9000\u51fa\u5bb9\u5668")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,i.kt)("ol",{parentName:"admonition",start:6},(0,i.kt)("li",{parentName:"ol"},"\u91cd\u542f\u5bb9\u5668")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker restart <\u5bb9\u5668ID/\u540d\u5b57>\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=configurations.yaml",title:"configurations.yaml"},"http:\n  use_x_forwarded_for: true\n  ip_ban_enabled: true\n  cors_allowed_origins:\n    - https://example.com\n  trusted_proxies:\n    - 192.168.1.0/24 # \u4f60\u5f00\u542fHome Assistant\u7684\u7535\u8111\u7684IP\u6bb5\n    - ***.***.***.*** # \u4f60\u516c\u7f51\u670d\u52a1\u5668\u7684IP\u5730\u5740\n    - 127.0.0.0/24 # \u672c\u5730IP\u6bb5\n# Loads default set of integrations. Do not remove.\ndefault_config:\n\n# Load frontend themes from the themes folder\nfrontend:\n  themes: !include_dir_merge_named themes\n\n# Text to speech\ntts:\n  - platform: google_translate\n\nautomation: !include automations.yaml\nscript: !include scripts.yaml\nscene: !include scenes.yaml\n")),(0,i.kt)("h3",{id:"nginx-\u914d\u7f6e"},"Nginx \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"##\n# You should look at the following URL's in order to grasp a solid understanding\n# of Nginx configuration files in order to fully unleash the power of Nginx.\n# https://www.nginx.com/resources/wiki/start/\n# https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/\n# https://wiki.debian.org/Nginx/DirectoryStructure\n#\n# In most cases, administrators will remove this file from sites-enabled/ and\n# leave it as reference inside of sites-available where it will continue to be\n# updated by the nginx packaging team.\n#\n# This file will automatically load configuration files provided by other\n# applications, such as Drupal or Wordpress. These applications will be made\n# available underneath a path with that package name, such as /drupal8.\n#\n# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.\n##\n\n# Default server configuration\n#\nserver {\n    listen 80;\n    #listen [::]:80 default_server;\n\n    # SSL configuration\n    #\n    listen 443 ssl;\n    #listen [::]:443 ssl default_server;\n\n    if ($scheme = http) {\n        rewrite ^(.*) https://$host$1 permanent;\n    }\n    #\n    # Note: You should disable gzip for SSL traffic.\n    # See: https://bugs.debian.org/773332\n    #\n    # Read up on ssl_ciphers to ensure a secure configuration.\n    # See: https://bugs.debian.org/765782\n    #\n    # Self signed certs generated by the ssl-cert package\n    # Don't use them in a production server!\n    #\n    # include snippets/snakeoil.conf;\n    \n    # ssl\u8bc1\u4e66\u5730\u5740\n        ssl_certificate     /usr/local/nginx/cert/example.com/ssl.pem;  # pem\u6587\u4ef6\u7684\u8def\u5f84\n        ssl_certificate_key  /usr/local/nginx/cert/example.com/ssl.key; # key\u6587\u4ef6\u7684\u8def\u5f84\n\n    # \u6b64\u5730\u5740\u7528\u6765\u4f5c\u4e3a\u4ee3\u7406frp\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u7684\u6587\u4ef6\u6e90    \n    # root /var/www/example.com;\n\n    # Add index.php to the list if you are using PHP\n    # index index.html index.htm index.nginx-debian.html;\n\n    server_name example.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:8091/; # frp web\u670d\u52a1\u63a5\u6536\u7684IP\u548c\u7aef\u53e3\n        proxy_http_version 1.1;\n        proxy_set_header  Upgrade $http_upgrade;\n        proxy_set_header  Connection \"upgrade\";\n        proxy_set_header  Host $host;\n        proxy_set_header  X-Real-IP $remote_addr;\n        proxy_set_header  X-Forwarded-Proto https;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;     \n        proxy_set_header  X-Forwarded-Host $remote_addr;\n    }\n\n# pass PHP scripts to FastCGI server\n    #\n    #location ~ \\.php$ {\n    #   include snippets/fastcgi-php.conf;\n    #\n    #   # With php-fpm (or other unix sockets):\n    #   fastcgi_pass unix:/run/php/php7.4-fpm.sock;\n    #   # With php-cgi (or other tcp sockets):\n    #   fastcgi_pass 127.0.0.1:9000;\n    #}\n\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #   deny all;\n    #}\n}\n\n\n# Virtual Host configuration for example.com\n#\n# You can move that to a different file under sites-available/ and symlink that\n# to sites-enabled/ to enable it.\n#\n#server {\n#   listen 80;\n#   listen [::]:80;\n#\n#   server_name example.com;\n#\n#   root /var/www/example.com;\n#   index index.html;\n#\n#   location / {\n#       try_files $uri $uri/ =404;\n#   }\n#}\n")))}m.isMDXComponent=!0}}]);