#!/bin/bash

# 🖼️ SCRIPT PARA SUBSTITUIR IMAGENS DA LANDING PAGE
# Execute: chmod +x replace-images.sh && ./replace-images.sh

echo "🎨 SUBSTITUINDO IMAGENS DA LANDING PAGE..."
echo ""

# Criar estrutura de pastas
echo "📁 Criando estrutura de pastas..."
mkdir -p public/images/hero
mkdir -p public/images/benefits  
mkdir -p public/images/testimonials
mkdir -p public/images/bonus

echo "✅ Pastas criadas com sucesso!"
echo ""

# Listar arquivos necessários
echo "📋 ARQUIVOS NECESSÁRIOS:"
echo ""
echo "🎯 SEÇÃO HERO:"
echo "  - public/images/hero/cover.png (Capa do PDF)"
echo "  - public/images/hero/kids-playing.png (Crianças brincando)"
echo ""
echo "👥 DEPOIMENTOS:"
echo "  - public/images/testimonials/marina-s.png (Foto da Marina)"
echo "  - public/images/testimonials/prof-diego.png (Foto do Prof. Diego)"
echo "  - public/images/testimonials/aline-f.png (Foto da Aline)"
echo ""
echo "🎁 BÔNUS:"
echo "  - public/images/bonus/sos-tedio.png (Capa SOS Tédio)"
echo "  - public/images/bonus/planner.png (Preview do Planner)"
echo ""

echo "🚀 INSTRUÇÕES:"
echo "1. Coloque suas imagens nas pastas correspondentes"
echo "2. Use os nomes exatos listados acima"
echo "3. Formatos recomendados: PNG, JPG, WebP"
echo "4. Tamanhos ideais: 400x300px para cards, 200x200px para fotos"
echo ""

echo "✅ Estrutura pronta! Agora adicione suas imagens!"

