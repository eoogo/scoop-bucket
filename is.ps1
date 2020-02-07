# powershell安装scoop
scoop
If ($?) {
    return
}

$install_dir = Read-Host "Which drive letter do you want to install?"
If ([String]::IsNullOrEmpty($install_dir)) {
    Write-Host "The string is null or empty."
    return
}
$install_dir += ':'
If (![io.Directory]::Exists($install_dir)) {
    Write-Host "Without this drive"
    return
}

$env:SCOOP= $install_dir + '\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')

$is_shadow = Read-Host "Whether to enable acceleration(Proxy to local 1080 port) [y|n]"
If ($is_shadow -eq 'y') {
    set ALL_PROXY 127.0.0.1:1080
}

iwr -useb get.scoop.sh | iex

scoop install aria2

$is_add_extra = Read-Host "Whether to add extension sources (default y) [y|n]"

If ([String]::IsNullOrEmpty($is_add_extra)) {
    $is_add_extra = 'y'
}

If ($is_add_extra -eq 'y') {
    scoop install git 7zip
    scoop bucket add extras
}
pause