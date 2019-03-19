# 问题
meta viewport 是做什么用的，怎么写？
## github仓库 罗列了所有的meta
[链接地址：](https://github.com/joshbuchea/HEAD)


## 有什么用
近几年，我们工作重心从ＰＣ端转移到移动端．由于PC网页的屏幕远远大于手机屏幕上的网页，我们在浏览器上开启手机调试模式的话，看到的效果会呈现出一个缩小的效果，所以我们一般都会制作一个能够适配于小屏幕手机的网站出来，供手机用户浏览。使用这段话就是告诉浏览器, 不要在移动端显示的时候缩放.name为viewport表示供移动设备使用. content定义了viewport的属性.

## 如何写

<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
