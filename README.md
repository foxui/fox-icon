fox-icons
=========

## 如何变更字体库？

`fox-icon` 使用 [http://fontello.com/](http://fontello.com/) 字体库。

 * 打开 [http://fontello.com/](http://fontello.com/)
 * 将 `font` 目录下的 `fox-icon.svg` 拖到页面的 `Custom Icons` 区域
 * 点击选中需要使用的图标（上传的以及页面中的其他图标）
 * 点击 `Download webfont` 下载字体库并解压，得到以下目录

```javascript
    |____css
    | |____animation.css
    | |____fontello-codes.css
    | |____fontello-embedded.css
    | |____fontello-ie7-codes.css
    | |____fontello-ie7.css
    | |____fontello.css
    |____demo.html
    |____font
    | |____fontello.eot
    | |____fontello.svg
    | |____fontello.ttf
    | |____fontello.woff
    |____README.txt
```

 * 将 `fontello.css` 的内容拷贝到 `fox-icon/sass/icon.scss`
 * 将 `font/` 下的文件覆盖到 `fox-icon/font/`
 * 运行 `grunt`


