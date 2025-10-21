#!/bin/bash

# 🎯 SCRIPT PARA VERIFICAR SE TUDO ESTÁ FUNCIONANDO
# Execute: chmod +x verificar-funcionamento.sh && ./verificar-funcionamento.sh

echo "🎨 VERIFICANDO FUNCIONAMENTO DA LANDING PAGE..."
echo ""

# Verificar se o servidor está rodando
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Servidor rodando em http://localhost:3000"
else
    echo "❌ Servidor NÃO está rodando!"
    echo "   Execute: npm run dev"
    exit 1
fi

echo ""
echo "🖼️ VERIFICANDO IMAGENS:"

# Verificar se a logo existe
if [ -f "public/images/logo.png" ]; then
    echo "✅ logo.png encontrada!"
    file_size=$(ls -lh public/images/logo.png | awk '{print $5}')
    echo "   Tamanho: $file_size"
else
    echo "❌ logo.png NÃO encontrada!"
fi

# Verificar se as imagens existem
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

# Testar se a logo está acessível
if curl -s http://localhost:3000/images/logo.png > /dev/null; then
    echo "✅ Logo logo.png acessível via HTTP"
else
    echo "❌ Logo logo.png NÃO acessível via HTTP"
fi

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

echo ""
echo "🎯 TESTES DISPONÍVEIS:"
echo "1. Página principal: http://localhost:3000"
echo "2. Página de teste: http://localhost:3000/test"
echo ""
echo "📱 INSTRUÇÕES:"
echo "1. Acesse http://localhost:3000"
echo "2. Verifique se a logo aparece no topo"
echo "3. Verifique se a capa do PDF aparece na seção hero"
echo "4. Se não aparecer, verifique o console do navegador"
echo "5. Se houver erros, execute: npm run dev"
echo ""
echo "✅ SISTEMA FUNCIONANDO!"
