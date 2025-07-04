#!/bin/bash

# Script otimizado para build no Vercel
echo "Starting optimized build..."

# Navegue para o diretório client
cd client

# Defina variáveis de ambiente
export NODE_ENV=production
export VITE_NODE_ENV=production

# Execute o build com timeout
timeout 600 npx vite build --config ../vite.config.prod.ts --mode production --outDir ../dist/public

# Verifique se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    echo "Files created in dist/public:"
    ls -la ../dist/public/
else
    echo "Build failed or timed out"
    exit 1
fi