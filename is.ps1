# powershell安装scoop
scoop
If ($?) {
    Write-Host "You have successfully installed scoop"
    pause
    return
}
Write-Host "------------------------------"

$install_dir = Read-Host "Which drive letter do you want to install"
If ([String]::IsNullOrEmpty($install_dir)) {
    Write-Host "The string is null or empty."
    pause
    return
}
$install_dir += ':'
If (![io.Directory]::Exists($install_dir)) {
    Write-Host "Without this drive"
    pause
    return
}

$env:SCOOP= $install_dir + '\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')

$is_shadow = Read-Host "Whether to enable acceleration(Proxy to local 1080 port) [y|n]"
If ($is_shadow -eq 'y') {
    set ALL_PROXY "127.0.0.1:1080"
    Write-Host "Please set your proxy to global mode!"
    pause
}

iwr -useb get.scoop.sh | iex

scoop install aria2

scoop install git 7zip
scoop bucket add extras
pause