#!/usr/bin/env node

/**
 * Script para análise de performance da landing page
 * Executa build e análise de bundle
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando análise de performance...\n');

try {
  // Build da aplicação
  console.log('📦 Executando build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Análise do bundle
  console.log('\n📊 Analisando bundle...');
  execSync('npx @next/bundle-analyzer', { stdio: 'inherit' });
  
  console.log('\n✅ Análise concluída!');
  console.log('\n📋 Próximos passos:');
  console.log('1. Teste a aplicação em modo produção: npm start');
  console.log('2. Execute o PageSpeed Insights: https://pagespeed.web.dev/');
  console.log('3. Verifique o Lighthouse no DevTools');
  console.log('4. Teste em diferentes dispositivos (360px, 768px, 1024px, 1280px)');
  
} catch (error) {
  console.error('❌ Erro durante a análise:', error.message);
  process.exit(1);
}



