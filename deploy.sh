#!/bin/bash

# 🚀 SCRIPT PARA DEPLOY NA VERCEL - VERSÃO BRASILEIRA
# Execute: chmod +x deploy.sh && ./deploy.sh

echo "🚀 PREPARANDO PROJETO BRASILEIRO PARA DEPLOY..."
echo ""

# Verificar se o projeto está funcionando
echo "🔍 VERIFICANDO PROJETO:"
if npm run build > /dev/null 2>&1; then
    echo "✅ Build funcionando"
else
    echo "❌ Erro no build - corrija antes de fazer deploy"
    exit 1
fi

echo ""
echo "📋 PRÓXIMOS PASSOS PARA O PROJETO BRASILEIRO:"
echo ""
echo "1. 🌐 CRIAR CONTA NA VERCEL:"
echo "   - Acesse: https://vercel.com"
echo "   - Clique em 'Sign Up'"
echo "   - Use sua conta GitHub"
echo ""
echo "2. 📁 CRIAR REPOSITÓRIO NO GITHUB:"
echo "   - Acesse: https://github.com"
echo "   - Clique em 'New repository'"
echo "   - Nome: pequenos-genios-br"
echo "   - Descrição: Landing Page Pequenos Gênios - Versão Brasil"
echo "   - Público ou privado"
echo ""
echo "3. 📤 FAZER UPLOAD DO PROJETO:"
echo "   - Execute: ./conectar-github.sh"
echo "   - Siga as instruções para conectar o repositório"
echo ""
echo "4. 🔗 CONECTAR NA VERCEL:"
echo "   - Na Vercel, clique em 'New Project'"
echo "   - Conecte o repositório 'pequenos-genios-br'"
echo "   - Deploy automático!"
echo ""
echo "5. 🌐 CONFIGURAR DOMÍNIO BRASILEIRO:"
echo "   - Na Vercel, vá em 'Domains'"
echo "   - Adicione seu domínio brasileiro"
echo "   - Configure DNS no seu provedor"
echo ""
echo "✅ PROJETO BRASILEIRO PRONTO PARA DEPLOY!"
echo "📱 Siga os passos acima para publicar"
echo ""
echo "⚠️  IMPORTANTE: Este é o projeto BRASILEIRO, separado do português!"












