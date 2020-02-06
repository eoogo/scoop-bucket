```powershell
# 使用powershell执行

# 安装到指定位置
$env:SCOOP='D:\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')

# 代理加速
set ALL_PROXY 127.0.0.1:1080

# 安装scoop
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex

# 启用aria2c加速
scoop install aria2

# 添加常用软件源
scoop install git 7zip
scoop bucket add extras
```

## [Scoop](https://scoop.sh/) buckets
View the Scoop Directory by:  
[GitHub score](https://github.com/rasa/scoop-directory/blob/master/by-score.md)
| [bucket name](https://github.com/rasa/scoop-directory/blob/master/by-bucket.md)
| [apps](https://github.com/rasa/scoop-directory/blob/master/by-apps.md)
| [stars](https://github.com/rasa/scoop-directory/blob/master/by-stars.md)
| [forks](https://github.com/rasa/scoop-directory/blob/master/by-forks.md)
| [last updated](https://github.com/rasa/scoop-directory/blob/master/by-date-updated.md)
| **[support](bucket.md)**
