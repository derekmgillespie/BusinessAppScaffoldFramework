# Quick restart Vite dev server
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1
$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location "$PSScriptRoot\prototypes\react-demo"
& "C:\Program Files\nodejs\npm.cmd" run dev -- --host 0.0.0.0 --port 5173
