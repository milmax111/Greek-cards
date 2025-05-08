@echo off
REM Ч ѕерейти в папку с этим .bat
cd /d "%~dp0"

REM Ч «апустить http-server в новом окне
start "HTTP-Server" cmd /k "npx http-server -p 8000"

REM Ч ѕодождать 2 секунды, пока сервер стартует
timeout /t 2 /nobreak >nul

REM Ч ќткрыть браузер на http://127.0.0.1:8000
start "" "http://127.0.0.1:8000"
