# Vite Dev Server Scripts Guide

Quick reference for starting and restarting the React demo dev server.

## Scripts

### `restart-vite.ps1`
Kills existing processes on ports 5173/5174, then starts Vite.

**Usage:**
```powershell
# Via VS Code task (recommended)
Run task: "Demo: Restart Vite"

# Manual execution
powershell -NoProfile -ExecutionPolicy Bypass -File .\restart-vite.ps1

# Force kill any process on the port (use if port is blocked by non-Node processes)
$env:RESTART_VITE_KILL_ANY='1'
powershell -NoProfile -ExecutionPolicy Bypass -File .\restart-vite.ps1
```

**Safety:** By default, only kills Node.js processes. Set `RESTART_VITE_KILL_ANY=1` to force-kill any process.

### `start-vite.ps1`
Starts Vite without cleanup (fails if port is busy).

**Usage:**
```powershell
# Via VS Code task (recommended)
Run task: "Demo: Start Vite"

# Manual execution - basic
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-vite.ps1

# Custom port
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-vite.ps1 -Port 5174

# Auto-open browser
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-vite.ps1 -OpenBrowser

# Or via environment variable
$env:START_VITE_OPEN='1'
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-vite.ps1
```

## Important Notes

- **Long-running process**: Vite dev servers run continuously until manually stopped (Ctrl+C or kill the terminal).
- **VS Code tasks are background**: Both tasks are configured with `isBackground: true`, so they won't block the terminal.
- **Manual execution**: When running scripts directly in PowerShell, the terminal will remain occupied by the Vite process. Use Ctrl+C to stop.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| npm not found | Install Node.js or update the `$defaultNpm` path in the script |
| Access denied on process stop | Run VS Code as Administrator (rarely needed) |
| Port still busy with `--strictPort` | Use `restart-vite.ps1` with `RESTART_VITE_KILL_ANY=1` |
| Demo path missing | Ensure `prototypes/react-demo` exists |
| netstat fallback warnings | Install Windows PowerShell NetTCPIP module (optional) |

## Quick Reference

```powershell
# Most common usage
Run task: "Demo: Restart Vite"
→ Opens http://localhost:5173

# Stop any running Vite
# Find the terminal running Vite and press Ctrl+C
# Or use Task Manager to kill node.exe processes
```
