```powershell
# 安装到指定位置
$env:SCOOP='D:\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')

# 代理加速
set ALL_PROXY 127.0.0.1:1080

# 安装scoop
iwr -useb get.scoop.sh | iex

# 启用aria2c加速
scoop install aria2

# 添加常用软件源
scoop bucket add extras
```

# [Scoop](https://scoop.sh/) buckets
View the Scoop Directory by:  
[GitHub score](by-score.md) | [bucket name](by-bucket.md) | [apps](by-apps.md) | [stars](by-stars.md) | [forks](by-forks.md) | [last updated](by-date-updated.md)
