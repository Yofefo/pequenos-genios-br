#!/bin/bash

# 🖼️ SCRIPT PARA TESTAR SE AS IMAGENS ESTÃO CARREGANDO
# Execute: chmod +x testar-imagens.sh && ./testar-imagens.sh

echo "🎨 TESTANDO IMAGENS DA LANDING PAGE..."
echo ""

# Verificar se as pastas existem
if [ ! -d "public/images/hero" ]; then
    echo "❌ Pasta public/images/hero não encontrada!"
    exit 1
fi

echo "📁 ESTRUTURA DE PASTAS:"
ls -la public/images/hero/
echo ""

# Verificar se as imagens existem
echo "🔍 VERIFICANDO IMAGENS:"

if [ -f "public/images/hero/cover.png" ]; then
    echo "✅ cover.png encontrada!"
    file_size=$(ls -lh public/images/hero/cover.png | awk '{print $5}')
    echo "   Tamanho: $file_size"
else
    echo "❌ cover.png NÃO encontrada!"
fi

if [ -f "public/images/hero/kids-playing.png" ]; then
    echo "✅ kids-playing.png encontrada!"
    file_size=$(ls -lh public/images/hero/kids-playing.png | awk '{print $5}')
    echo "   Tamanho: $file_size"
else
    echo "❌ kids-playing.png NÃO encontrada!"
fi

echo ""
echo "🌐 TESTANDO ACESSO VIA HTTP:"

# Testar se o servidor está rodando
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Servidor rodando em http://localhost:3000"
    
    # Testar se as imagens estão acessíveis
    if curl -s http://localhost:3000/images/hero/cover.png > /dev/null; then
        echo "✅ Imagem cover.png acessível via HTTP"
    else
        echo "❌ Imagem cover.png NÃO acessível via HTTP"
    fi
    
    if curl -s http://localhost:3000/images/hero/kids-playing.png > /dev/null; then
        echo "✅ Imagem kids-playing.png acessível via HTTP"
    else
        echo "❌ Imagem kids-playing.png NÃO acessível via HTTP"
    fi
else
    echo "❌ Servidor NÃO está rodando!"
    echo "   Execute: npm run dev"
fi

echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. Acesse http://localhost:3000"
echo "2. Verifique se as imagens aparecem"
echo "3. Se não aparecerem, verifique o console do navegador"
echo "4. Se houver erros, execute: npm run dev"

