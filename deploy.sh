#!/bin/bash

# 🚀 SCRIPT PARA DEPLOY NA VERCEL
# Execute: chmod +x deploy.sh && ./deploy.sh

echo "🚀 PREPARANDO PROJETO PARA DEPLOY..."
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
echo "📋 PRÓXIMOS PASSOS:"
echo ""
echo "1. 🌐 CRIAR CONTA NA VERCEL:"
echo "   - Acesse: https://vercel.com"
echo "   - Clique em 'Sign Up'"
echo "   - Use sua conta GitHub"
echo ""
echo "2. 📁 CRIAR REPOSITÓRIO NO GITHUB:"
echo "   - Acesse: https://github.com"
echo "   - Clique em 'New repository'"
echo "   - Nome: pequenos-genios-lp"
echo "   - Público ou privado"
echo ""
echo "3. 📤 FAZER UPLOAD DO PROJETO:"
echo "   - Faça upload de todos os arquivos"
echo "   - Commit e push"
echo ""
echo "4. 🔗 CONECTAR NA VERCEL:"
echo "   - Na Vercel, clique em 'New Project'"
echo "   - Conecte seu repositório"
echo "   - Deploy automático!"
echo ""
echo "5. 🌐 CONFIGURAR DOMÍNIO:"
echo "   - Na Vercel, vá em 'Domains'"
echo "   - Adicione seu domínio da Hostinger"
echo "   - Configure DNS na Hostinger"
echo ""
echo "✅ PROJETO PRONTO PARA DEPLOY!"
echo "📱 Siga os passos acima para publicar"












