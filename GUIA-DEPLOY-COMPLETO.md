# 🚀 GUIA COMPLETO DE DEPLOY - GITHUB + VERCEL

## 📋 **PASSO A PASSO COMPLETO:**

### **1. ✅ GIT CONFIGURADO:**
- ✅ Repositório inicializado
- ✅ Arquivos adicionados
- ✅ Commit realizado
- ✅ Pronto para conectar com GitHub

### **2. 🔗 CONECTAR COM GITHUB:**

#### **A. EXECUTAR COMANDOS:**
```bash
# Substitua 'seuusuario' pelo seu usuário do GitHub
git remote add origin https://github.com/seuusuario/pequenos-genios-lp.git
git branch -M main
git push -u origin main
```

#### **B. VERIFICAR NO GITHUB:**
- Acesse: https://github.com/seuusuario/pequenos-genios-lp
- Verifique se todos os arquivos foram enviados
- Deve ter 48+ arquivos

### **3. 🚀 DEPLOY NA VERCEL:**

#### **A. CRIAR CONTA VERCEL:**
1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Use sua conta GitHub (recomendado)
4. Autorize a Vercel a acessar seus repositórios

#### **B. CONECTAR REPOSITÓRIO:**
1. Na Vercel, clique em "New Project"
2. Selecione "Import Git Repository"
3. Escolha seu repositório `pequenos-genios-lp`
4. Clique em "Import"

#### **C. CONFIGURAR PROJETO:**
- **Framework Preset:** Next.js (detectado automaticamente)
- **Root Directory:** `./` (padrão)
- **Build Command:** `npm run build` (automático)
- **Output Directory:** `.next` (automático)
- **Install Command:** `npm install` (automático)

#### **D. DEPLOY:**
1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Sua landing page estará online!

### **4. 🌐 CONFIGURAR DOMÍNIO:**

#### **A. ADICIONAR DOMÍNIO:**
1. Na Vercel, vá em "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio da Hostinger
4. Clique em "Add"

#### **B. CONFIGURAR DNS NA HOSTINGER:**
1. Acesse: https://hpanel.hostinger.com
2. Vá em "DNS Zone Editor"
3. Adicione os registros:

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com

Tipo: A
Nome: @
Valor: 76.76.19.61
```

#### **C. AGUARDAR PROPAGAÇÃO:**
- DNS pode levar até 24h para propagar
- Geralmente funciona em 1-2 horas
- Teste acessando seu domínio

---

## ✅ **RESULTADO FINAL:**

### **URLs DISPONÍVEIS:**
- **Vercel:** https://pequenos-genios-lp.vercel.app
- **Seu domínio:** https://seudominio.com

### **CARACTERÍSTICAS:**
- ✅ **SSL automático** - HTTPS gratuito
- ✅ **CDN global** - Performance mundial
- ✅ **Deploy automático** - A cada push no GitHub
- ✅ **Domínio personalizado** - Seu domínio da Hostinger
- ✅ **Manutenção zero** - Tudo automático

---

## 🔧 **COMANDOS ÚTEIS:**

### **ATUALIZAR PROJETO:**
```bash
# Fazer alterações nos arquivos
git add .
git commit -m "Atualização da landing page"
git push origin main
# Deploy automático na Vercel!
```

### **VERIFICAR STATUS:**
```bash
git status
git log --oneline
```

---

## 🎯 **CHECKLIST FINAL:**

- [ ] Repositório criado no GitHub
- [ ] Projeto enviado para GitHub
- [ ] Conta criada na Vercel
- [ ] Projeto conectado na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Domínio configurado
- [ ] DNS configurado na Hostinger
- [ ] SSL funcionando
- [ ] Landing page online

---

## 🚨 **SE ALGO DER ERRADO:**

### **PROBLEMAS COMUNS:**
1. **Build falha:** Verifique se `npm run build` funciona localmente
2. **Domínio não funciona:** Aguarde propagação DNS (até 24h)
3. **SSL não ativa:** Aguarde alguns minutos após configurar DNS
4. **Imagens não carregam:** Verifique se estão na pasta `public/images/`

### **SUPORTE:**
- **Vercel:** https://vercel.com/help
- **GitHub:** https://docs.github.com
- **Hostinger:** https://support.hostinger.com

---

**🎉 RESULTADO: Landing page online e funcionando!** 🚀
