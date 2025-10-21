#!/bin/bash

# 🖼️ SCRIPT PARA SUBSTITUIR SUAS IMAGENS 1024x1024
# Execute: chmod +x substituir-imagens.sh && ./substituir-imagens.sh

echo "🎨 SUBSTITUINDO IMAGENS 1024x1024..."
echo ""

# Verificar se as pastas existem
if [ ! -d "public/images/hero" ]; then
    echo "📁 Criando estrutura de pastas..."
    mkdir -p public/images/hero
    mkdir -p public/images/testimonials
    mkdir -p public/images/bonus
    echo "✅ Pastas criadas!"
fi

echo "📋 INSTRUÇÕES PARA SUAS IMAGENS:"
echo ""
echo "🎯 LOGO PRINCIPAL:"
echo "  - Coloque sua logo em: public/images/logo.png (320x128px recomendado)"
echo ""
echo "🎯 IMAGENS DO HERO (1024x1024):"
echo "  - Coloque sua capa do PDF em: public/images/hero/cover.png"
echo "  - Coloque suas crianças brincando em: public/images/hero/kids-playing.png"
echo ""
echo "👥 FOTOS DOS DEPOIMENTOS (1024x1024):"
echo "  - Foto da Marina em: public/images/testimonials/marina-s.png"
echo "  - Foto do Prof. Diego em: public/images/testimonials/prof-diego.png"
echo "  - Foto da Aline em: public/images/testimonials/aline-f.png"
echo ""
echo "🎁 IMAGENS DOS BÔNUS (1024x1024):"
echo "  - SOS Tédio em: public/images/bonus/sos-tedio.png"
echo "  - Planner em: public/images/bonus/planner.png"
echo ""

echo "🚀 COMO SUBSTITUIR:"
echo "1. Copie suas imagens para as pastas corretas"
echo "2. Use os nomes exatos listados acima"
echo "3. Mantenha o formato PNG ou JPG"
echo "4. Acesse http://localhost:3000 para ver o resultado"
echo ""

echo "✅ SISTEMA CONFIGURADO PARA 1024x1024!"
echo "📱 As imagens serão redimensionadas automaticamente para diferentes telas"
echo ""

# Verificar se as imagens existem
if [ -f "public/images/hero/cover.png" ]; then
    echo "✅ Capa do PDF encontrada!"
else
    echo "⚠️  Capa do PDF não encontrada - adicione em public/images/hero/cover.png"
fi

if [ -f "public/images/hero/kids-playing.png" ]; then
    echo "✅ Crianças brincando encontrada!"
else
    echo "⚠️  Crianças brincando não encontrada - adicione em public/images/hero/kids-playing.png"
fi

echo ""
echo "🎯 PRÓXIMO PASSO: Adicione suas imagens nas pastas corretas!"
