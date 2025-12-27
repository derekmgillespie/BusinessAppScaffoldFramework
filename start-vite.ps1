# Start Vite dev server
$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location "$PSScriptRoot\prototypes\react-demo"
& "C:\Program Files\nodejs\npm.cmd" run dev -- --host 0.0.0.0 --port 5173
