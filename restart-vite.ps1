# Quick restart Vite dev server (React demo)
$ErrorActionPreference = 'Stop'

# Utility: write informational messages consistently
function Info($msg) { Write-Host "[restart-vite] $msg" }
function Warn($msg) { Write-Warning "[restart-vite] $msg" }

# Stop Node/Vite processes holding the dev port to ensure a clean restart.
# Safer by default: only kill node-related processes; override with env RESTART_VITE_KILL_ANY=1
function Stop-PortProcess {
	param([int]$Port)

	$killAny = ($env:RESTART_VITE_KILL_ANY -eq '1')

	$hasNetTcp = Get-Command Get-NetTCPConnection -ErrorAction SilentlyContinue
	$connections = $null
	if ($hasNetTcp) {
		$connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
	} else {
		# Fallback for environments missing NetTCPIP cmdlets
		$netstat = netstat -ano | Select-String ":$Port" | ForEach-Object { $_.ToString() }
		if ($netstat) {
			$pids = ($netstat -split '\s+') | Where-Object { $_ -match '^[0-9]+$' } | Select-Object -Unique
			if ($pids) {
				$connections = @()
				foreach ($procId in $pids) { $connections += [pscustomobject]@{ OwningProcess = [int]$procId } }
			}
		}
	}

	if ($connections) {
		$pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique
		foreach ($processId in $pids) {
			$proc = Get-Process -Id $processId -ErrorAction SilentlyContinue
			if (-not $proc) { continue }
			$name = $proc.Name
			$isNode = $name -match '^(node|nodejs)$' -or ($proc.Path -like '*\\node.exe')
			if ($killAny -or $isNode) {
				Info "Stopping PID $processId ($name) using port $Port"
				Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
			} else {
				Warn "Port $Port in use by PID $processId ($name). Skipping (set RESTART_VITE_KILL_ANY=1 to force)."
			}
		}
	} else {
		Info "No process found using port $Port"
	}
}

foreach ($port in 5173, 5174) { Stop-PortProcess -Port $port }
Start-Sleep -Milliseconds 300

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$demoPath = Join-Path $scriptRoot "prototypes\react-demo"
if (-not (Test-Path $demoPath)) {
	Write-Error "React demo path not found: $demoPath"
	exit 1
}

$npmCommand = Get-Command npm -ErrorAction SilentlyContinue
if ($npmCommand) {
	$npm = $npmCommand.Source
} else {
	$defaultNpm = "C:\Program Files\nodejs\npm.cmd"
	if (Test-Path $defaultNpm) { $npm = $defaultNpm }
}

if (-not $npm) {
	Write-Error "npm was not found on PATH or at the default install location. Install Node.js or update restart-vite.ps1 with the correct npm path."
	exit 1
}

# Keep Vite non-interactive so it doesn't print shortcut prompts (press h, etc.).
$env:CI = 'true'
$env:FORCE_COLOR = '1'
$env:VITE_CLI_SHORTCUTS = 'false'

Info "Starting Vite dev server at $demoPath on port 5173"

# Run attached so logs stay visible in the task terminal; suppress shortcuts.
Push-Location $demoPath
try {
	& $npm run dev -- --host 0.0.0.0 --port 5173 --strictPort --clearScreen false
}
finally { Pop-Location }
