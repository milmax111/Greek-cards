@echo off
REM � ������� � ����� � ���� .bat
cd /d "%~dp0"

REM � ��������� http-server � ����� ����
start "HTTP-Server" cmd /k "npx http-server -p 8000"

REM � ��������� 2 �������, ���� ������ ��������
timeout /t 2 /nobreak >nul

REM � ������� ������� �� http://127.0.0.1:8000
start "" "http://127.0.0.1:8000"
