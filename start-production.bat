@echo off
echo ========================================
echo    G.A.M.Q - Cyber Security
echo    Iniciando em Producao Local
echo ========================================
echo.

echo [1/3] Construindo o projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Falha na construcao do projeto
    pause
    exit /b 1
)

echo.
echo [2/3] Verificando portas disponiveis...
powershell -Command "Test-NetConnection -ComputerName localhost -Port 3000 -InformationLevel Quiet"
if %errorlevel% equ 0 (
    echo Porta 3000 esta ocupada, tentando porta 4000...
    set PORT=4000
) else (
    echo Porta 3000 disponivel
    set PORT=3000
)

echo.
echo [3/3] Iniciando servidor na porta %PORT%...
echo.
echo ========================================
echo    Aplicacao disponivel em:
echo    http://localhost:%PORT%
echo ========================================
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

set NODE_ENV=production
node dist/index.js 