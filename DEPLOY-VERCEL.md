# 🚀 DEPLOY NA VERCEL - GUIA COMPLETO

## 📋 **PASSO A PASSO:**

### **1. PREPARAR O PROJETO:**
```bash
# No terminal, dentro da pasta do projeto:
npm run build
```

### **2. CRIAR CONTA NA VERCEL:**
1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Use sua conta GitHub (recomendado)

### **3. CONECTAR REPOSITÓRIO:**
1. No GitHub, crie um repositório
2. Faça upload do projeto
3. Na Vercel, clique em "New Project"
4. Conecte seu repositório

### **4. CONFIGURAR DEPLOY:**
- **Framework:** Next.js (detectado automaticamente)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### **5. DOMÍNIO PERSONALIZADO:**
1. Na Vercel, vá em "Domains"
2. Adicione seu domínio da Hostinger
3. Configure os DNS na Hostinger

---

## 🌐 **CONFIGURAÇÃO DNS NA HOSTINGER:**

### **DNS RECORDS:**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com

Tipo: A
Nome: @
Valor: 76.76.19.61
```

---

## ✅ **VANTAGENS VERCEL:**
- ✅ Deploy automático
- ✅ SSL automático
- ✅ CDN global
- ✅ Performance otimizada
- ✅ Domínio personalizado
- ✅ Grátis para projetos pessoais

---

## 🎯 **RESULTADO:**
- **URL:** https://seudominio.com
- **SSL:** Automático
- **Performance:** Otimizada
- **Deploy:** Automático a cada push


