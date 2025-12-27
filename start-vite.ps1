param(
	[switch]$OpenBrowser,
	[int]$Port = 5173
)

# Start Vite dev server (React demo)
$ErrorActionPreference = 'Stop'

# Utility: write informational messages consistently
function Info($msg) { Write-Host "[start-vite] $msg" }
function Warn($msg) { Write-Warning "[start-vite] $msg" }

# Resolve project root relative to script location to avoid path issues when invoked from tasks.
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$demoPath = Join-Path $scriptRoot "prototypes\react-demo"
if (-not (Test-Path $demoPath)) {
	Write-Error "React demo path not found: $demoPath"
	exit 1
}

# Prefer npm on PATH; fall back to the default NodeJS install location if needed.
$npmCommand = Get-Command npm -ErrorAction SilentlyContinue
if ($npmCommand) {
	$npm = $npmCommand.Source
} else {
	$defaultNpm = "C:\Program Files\nodejs\npm.cmd"
	if (Test-Path $defaultNpm) { $npm = $defaultNpm }
}

if (-not $npm) {
	Write-Error "npm was not found on PATH or at the default install location. Install Node.js or update start-vite.ps1 with the correct npm path."
	exit 1
}

# Keep Vite non-interactive so it doesn't print shortcut prompts (press h, etc.).
$env:CI = 'true'
$env:FORCE_COLOR = '1'
$env:VITE_CLI_SHORTCUTS = 'false'

Info "Starting Vite dev server at $demoPath on port $Port"
if ($OpenBrowser -or ($env:START_VITE_OPEN -eq '1')) {
	Info "Opening browser at http://localhost:$Port"
	Start-Process "http://localhost:$Port"
}

# Run attached so logs stay visible in the task terminal; suppress shortcuts.
Push-Location $demoPath
try {
	& $npm run dev -- --host 0.0.0.0 --port $Port --strictPort --clearScreen false
}
finally { Pop-Location }
