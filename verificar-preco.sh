#!/bin/bash

# 💰 SCRIPT PARA VERIFICAR SE O PREÇO FOI ATUALIZADO
# Execute: chmod +x verificar-preco.sh && ./verificar-preco.sh

echo "💰 VERIFICANDO PREÇO ATUALIZADO..."
echo ""

# Verificar se o preço está correto nos arquivos
echo "🔍 VERIFICANDO ARQUIVOS:"

# Verificar CTA.tsx
if grep -q "R\$ 27,90" src/components/CTA.tsx; then
    echo "✅ CTA.tsx - Preço correto: R$ 27,90"
else
    echo "❌ CTA.tsx - Preço incorreto ou não encontrado"
fi

# Verificar checkout/page.tsx
if grep -q "R\$ 27,90" src/app/checkout/page.tsx; then
    echo "✅ checkout/page.tsx - Preço correto: R$ 27,90"
else
    echo "❌ checkout/page.tsx - Preço incorreto ou não encontrado"
fi

echo ""
echo "🌐 TESTANDO NO NAVEGADOR:"

# Verificar se o servidor está rodando
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Servidor rodando em http://localhost:3000"
    echo "   Acesse para ver o preço atualizado"
else
    echo "❌ Servidor NÃO está rodando!"
    echo "   Execute: npm run dev"
fi

echo ""
echo "🎯 PREÇO ATUALIZADO PARA: R$ 27,90"
echo "📱 Acesse http://localhost:3000 para ver o resultado"
echo ""
echo "✅ VERIFICAÇÃO CONCLUÍDA!"
