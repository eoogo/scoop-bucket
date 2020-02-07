# 像极客一样简洁高效的使用Windows

用过一阵子的linux系统，上面的包管理工具实在好用，回到windows后虽说系统没有那么多需要折腾的，装软件一个一个搜，一个一个找官网，一个一个找下载链接，开始安装等，也好麻烦

于是乎，搜索 一下 windows包管理器。可行的方案貌似就 chocolatey, scoop, one-get了  
Chocolatey 装的软件太分散，目录太乱，而且必须以管理员身份才能安装    
One-get 不好玩，啥都没有,   
剩下一个scoop, 装的软件都在一个文件夹里，看着不那么糟心

安装好scoop后就可以在cmd或powershell里拥有这等操作了：
```powershell
# 安装谷歌浏览器
scoop install googlechrome
# 安装火狐浏览器
scoop install firefox
```
![soft list](http://image.coolapk.com/feed/2020/0206/21/865604_20ecfac0_6408_9554@328x796.png.m.jpg)

应该也有人用过这个的，但是到了常用软件那一步，软件源分的太散乱就放弃了.  
在 [这里](https://github.com/rasa/scoop-directory/blob/master/by-apps.md) 是有软件源的汇总的


麻烦的一点就是 ，想要安装微信，方案就是在上面那个链接里搜索 wechat，然后翻到它所属哪个源添加，然后才能 scoop install wechat
为此，我们需要一个 [scoop 应用商店](https://scoop.ccheng.live) (需要tz)  
首次打开会开始检索可用源，等待一下
![loading](http://image.coolapk.com/feed/2020/0206/21/865604_85bd7e20_6408_9556@1268x680.png.m.jpg)

\# 软件源展示，每次进入都会随机推荐一些软件
![home](http://image.coolapk.com/feed/2020/0206/21/865604_57770a6e_6408_9558@1268x680.png.m.jpg)
![home](http://image.coolapk.com/feed/2020/0206/21/865604_edc24a89_6408_956@1268x680.png.m.jpg)


想尝试的小伙伴可以继续点击左上角的 Install scoop 获取安装代码
![install](http://image.coolapk.com/feed/2020/0206/21/865604_d400aa10_6408_9562@316x246.png.m.jpg)
然后复制安装代码到powershell里(快捷键 win + x 松开按 i)  
此处输入 a 并回车
![powershell](http://image.coolapk.com/feed/2020/0206/21/865604_5639a914_6408_9564@1345x148.png.m.jpg)
![poin](http://image.coolapk.com/feed/2020/0206/21/865604_decd9a64_6408_9566@1285x240.png.m.jpg)

接下来会分别提示
- 安装盘符 – 你要安装到哪个盘里
- 是否启用代理 – 下载时代理到本地的1080端口，让请求走本地的tz
- 是否添加扩展源，默认 是

以后安装软件就可以在此搜索关键字，点击install获取安装代码了

```powershell
# 安装 wsp office
scoop install wpsoffice
# 安装微信
scoop bucket add h404bi_dorado https://github.com/h404bi/dorado
scoop install wechat
# 安装ps
scoop bucket add eoogo_scoop-bucket https://github.com/eoogo/scoop-bucket
scoop install photoshop2018
# 安装网易云音乐
scoop bucket add h404bi_dorado https://github.com/h404bi/dorado
scoop install neteasemusic
```

。。。。。。好吧，我是太无聊了🙁


## [Scoop](https://scoop.sh/) buckets
View the Scoop Directory by:  
[GitHub score](https://github.com/rasa/scoop-directory/blob/master/by-score.md)
| [bucket name](https://github.com/rasa/scoop-directory/blob/master/by-bucket.md)
| [apps](https://github.com/rasa/scoop-directory/blob/master/by-apps.md)
| [stars](https://github.com/rasa/scoop-directory/blob/master/by-stars.md)
| [forks](https://github.com/rasa/scoop-directory/blob/master/by-forks.md)
| [last updated](https://github.com/rasa/scoop-directory/blob/master/by-date-updated.md)
| **[support](bucket.md)**
