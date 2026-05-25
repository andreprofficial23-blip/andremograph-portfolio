@echo off
cd /d c:\Users\dedes\OneDrive\Documentos\GitHub\andremograph-portfolio
echo.
echo === Sincronizando com GitHub ===
git fetch origin
git pull origin main
echo.
echo === Executando build ===
npm run build
echo.
echo === Build concluído ===
pause
