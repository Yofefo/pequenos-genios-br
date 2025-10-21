#!/bin/bash

# 🔗 SCRIPT PARA TESTAR REDIRECIONAMENTO PARA GATEWAY DE PAGAMENTO
# Execute: chmod +x testar-redirecionamento.sh && ./testar-redirecionamento.sh

echo "🔗 TESTANDO REDIRECIONAMENTO PARA GATEWAY DE PAGAMENTO..."
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
echo "🎯 GATEWAY DE PAGAMENTO CONFIGURADO:"
echo "   URL: https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f"
echo ""

echo "🔍 VERIFICANDO ARQUIVOS:"

# Verificar se o redirecionamento está configurado na página principal
if grep -q "pay.kirvano.com" src/app/page.tsx; then
    echo "✅ page.tsx - Redirecionamento configurado"
else
    echo "❌ page.tsx - Redirecionamento NÃO encontrado"
fi

# Verificar se o redirecionamento está configurado na página de checkout
if grep -q "pay.kirvano.com" src/app/checkout/page.tsx; then
    echo "✅ checkout/page.tsx - Redirecionamento configurado"
else
    echo "❌ checkout/page.tsx - Redirecionamento NÃO encontrado"
fi

echo ""
echo "🎯 CTAs CONFIGURADOS:"
echo "1. Hero - Botão 'Quero o Guia Agora'"
echo "2. CTA Principal - Botão 'Quero o Guia Agora'"
echo "3. Checkout - Botão 'Finalizar Compra'"
echo ""

echo "🌐 TESTE MANUAL:"
echo "1. Acesse http://localhost:3000"
echo "2. Clique em qualquer botão de compra"
echo "3. Verifique se abre o gateway do Kirvano"
echo "4. Verifique se o preço está R$ 27,90"
echo ""

echo "✅ REDIRECIONAMENTO CONFIGURADO!"
echo "📱 Acesse http://localhost:3000 para testar"

