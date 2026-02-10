@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"

set "HOST=127.0.0.1"
set "BASEPORT=3001"

rem Optional: Load environment variables from .env (KEY=VALUE). Lines starting with # are ignored.
rem This allows local Coinbase testing without hardcoding secrets into the repo.
if exist ".env" (
  for /f "usebackq eol=# tokens=1,* delims==" %%A in (".env") do (
    if not "%%A"=="" (
      set "%%A=%%B"
    )
  )
)

for /f "usebackq delims=" %%P in (`powershell -NoProfile -Command "$base=%BASEPORT%; $p=$base; while ($p -lt ($base+50)) { try { $c = Test-NetConnection -ComputerName '127.0.0.1' -Port $p -WarningAction SilentlyContinue; if (-not $c.TcpTestSucceeded) { break } } catch { break }; $p++ }; Write-Output $p"`) do set "PORT=%%P"

echo Starting SimDeck server on %HOST%:%PORT% ...
echo Logs: server.log
echo URL:  http://%HOST%:%PORT%/
echo.
echo Keep this window open while using the site. Close it to stop the server.
echo.

echo [start] %date% %time% > server.log
echo [info] Starting node server.js %PORT% %HOST% >> server.log
start "" "http://%HOST%:%PORT%/"

node server.js %PORT% %HOST% >> server.log 2>&1

echo.
echo Server stopped. Press any key to close.
pause >nul
