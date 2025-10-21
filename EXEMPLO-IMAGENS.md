# 🖼️ EXEMPLO DE COMO SUBSTITUIR AS IMAGENS

## 📁 **ESTRUTURA DE PASTAS CRIADA:**

```
public/
├── images/
│   ├── hero/
│   │   ├── cover.png          ← Capa do PDF
│   │   └── kids-playing.png   ← Crianças brincando
│   ├── benefits/
│   │   ├── creativity.png
│   │   ├── step-by-step.png
│   │   ├── no-screens.png
│   │   ├── bonding.png
│   │   ├── group-activities.png
│   │   └── quick-activities.png
│   ├── testimonials/
│   │   ├── marina-s.png       ← Foto da Marina S.
│   │   ├── prof-diego.png     ← Foto do Prof. Diego
│   │   └── aline-f.png        ← Foto da Aline F.
│   └── bonus/
│       ├── sos-tedio.png      ← Capa SOS Tédio
│       └── planner.png        ← Preview do Planner
```

---

## 🎯 **COMO SUBSTITUIR CADA IMAGEM:**

### **1. CAPA DO PDF (Hero)**
```bash
# Substitua o arquivo:
cp sua-capa.png public/images/hero/cover.png
```

### **2. CRIANÇAS BRINCANDO (Hero)**
```bash
# Substitua o arquivo:
cp suas-criancas.png public/images/hero/kids-playing.png
```

### **3. FOTOS DOS DEPOIMENTOS**
```bash
# Substitua os arquivos:
cp foto-marina.png public/images/testimonials/marina-s.png
cp foto-diego.png public/images/testimonials/prof-diego.png
cp foto-aline.png public/images/testimonials/aline-f.png
```

### **4. IMAGENS DOS BÔNUS**
```bash
# Substitua os arquivos:
cp sos-tedio.png public/images/bonus/sos-tedio.png
cp planner.png public/images/bonus/planner.png
```

---

## 🎨 **ESPECIFICAÇÕES TÉCNICAS:**

### **TAMANHOS RECOMENDADOS:**
- **Hero (cover.png):** 400x600px
- **Hero (kids-playing.png):** 600x400px
- **Depoimentos:** 200x200px (quadradas)
- **Bônus:** 300x400px

### **FORMATOS ACEITOS:**
- ✅ PNG (recomendado)
- ✅ JPG
- ✅ WebP
- ✅ SVG

### **QUALIDADE:**
- **Resolução:** 72-150 DPI
- **Peso:** Máximo 500KB por imagem
- **Cores:** RGB

---

## 🚀 **TESTE APÓS SUBSTITUIR:**

1. **Acesse:** http://localhost:3000
2. **Verifique:** Se as imagens carregaram
3. **Teste:** Diferentes tamanhos de tela
4. **Verifique:** Se não há erros no console

---

## 🔧 **SE AS IMAGENS NÃO CARREGAREM:**

O sistema tem **fallback automático** - se uma imagem não existir, será exibido um placeholder com texto explicativo.

---

## 📱 **RESPONSIVIDADE:**

As imagens se adaptam automaticamente a:
- 📱 Mobile (320px-767px)
- 📱 Tablet (768px-1199px)
- 💻 Desktop (1200px+)

---

## ✅ **CHECKLIST FINAL:**

- [ ] Todas as imagens substituídas
- [ ] Nomes corretos dos arquivos
- [ ] Tamanhos adequados
- [ ] Qualidade boa
- [ ] Carregamento rápido
- [ ] Responsivo funcionando
- [ ] Sem erros no console

---

**🎯 RESULTADO:** Landing page com imagens reais e profissionais!
