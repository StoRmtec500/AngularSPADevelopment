foreach($line in Get-Content d:\extensions.txt) {
    code --install-extension $line
}