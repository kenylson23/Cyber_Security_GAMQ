@echo off
echo ========================================
echo    G.A.M.Q - Cyber Security
echo    Iniciando Localmente
echo ========================================
echo.

echo [1/2] Construindo o projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Falha na construcao do projeto
    pause
    exit /b 1
)

echo.
echo [2/2] Iniciando servidor na porta 3000...
echo.
echo ========================================
echo    Aplicacao disponivel em:
echo    http://localhost:3000
echo ========================================
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

call npm run start:local 