#!/bin/bash

# 🚀 SCRIPT PARA AUTOMATIZAR DEPLOY - VERSÃO BRASILEIRA
# Execute: chmod +x automatizar-deploy.sh && ./automatizar-deploy.sh

echo "🚀 AUTOMATIZANDO DEPLOY DO PROJETO BRASILEIRO..."
echo ""

# Verificar se o build funciona
echo "🔍 VERIFICANDO BUILD:"
if npm run build > /dev/null 2>&1; then
    echo "✅ Build funcionando"
else
    echo "❌ Erro no build - corrija antes de fazer deploy"
    exit 1
fi

echo ""
echo "📋 PRÓXIMOS PASSOS PARA O PROJETO BRASILEIRO:"
echo ""
echo "1. 🔗 CONECTAR COM GITHUB:"
echo "   Execute os comandos abaixo substituindo 'seuusuario' pelo seu usuário:"
echo ""
echo "   git remote add origin https://github.com/seuusuario/pequenos-genios-br.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2. 🌐 DEPLOY NA VERCEL:"
echo "   - Acesse: https://vercel.com"
echo "   - Clique em 'New Project'"
echo "   - Conecte o repositório 'pequenos-genios-br'"
echo "   - Deploy automático!"
echo ""
echo "3. 🌐 CONFIGURAR DOMÍNIO BRASILEIRO:"
echo "   - Na Vercel, vá em 'Domains'"
echo "   - Adicione seu domínio brasileiro"
echo "   - Configure DNS no seu provedor"
echo ""
echo "✅ PROJETO BRASILEIRO PRONTO PARA DEPLOY!"
echo "📱 Siga os passos acima"
echo ""
echo "⚠️  IMPORTANTE: Este é o projeto BRASILEIRO, separado do português!"












