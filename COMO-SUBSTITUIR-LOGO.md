# 🎨 COMO SUBSTITUIR A LOGO

## 🎯 **LOGO NO TOPO DA PÁGINA**

A logo agora está configurada como um placeholder que você pode facilmente substituir!

### 📁 **ONDE COLOCAR SUA LOGO:**

```
public/images/logo.png
```

### 🎨 **ESPECIFICAÇÕES RECOMENDADAS:**

- **Tamanho:** 320x128px (recomendado)
- **Formato:** PNG, JPG ou SVG
- **Fundo:** Transparente (PNG) ou branco
- **Qualidade:** Alta resolução para ficar nítida

### 🚀 **COMO SUBSTITUIR:**

#### **MÉTODO 1: Copiar arquivo**
```bash
cp sua-logo.png public/images/logo.png
```

#### **MÉTODO 2: Arrastar e soltar**
1. Abra a pasta `public/images/`
2. Arraste sua logo para a pasta
3. Renomeie para `logo.png`

#### **MÉTODO 3: Usando o script**
```bash
./substituir-imagens.sh
```

### ✅ **VERIFICAR SE FUNCIONOU:**

1. **Acesse:** http://localhost:3000
2. **Verifique:** Se sua logo aparece no topo
3. **Teste:** Execute `./verificar-funcionamento.sh`

### 🎯 **CARACTERÍSTICAS DA LOGO:**

- **Posição:** Centralizada no topo da página
- **Tamanho:** 320x128px (redimensiona automaticamente)
- **Efeito:** Hover com escala suave
- **Fundo:** Branco com sombra
- **Responsiva:** Adapta a diferentes telas

### 📱 **TESTE DE RESPONSIVIDADE:**

- **Desktop:** 320x128px
- **Tablet:** Redimensiona automaticamente
- **Mobile:** Redimensiona automaticamente

### 🔧 **SE A LOGO NÃO APARECER:**

1. **Verifique o nome:** Deve ser exatamente `logo.png`
2. **Verifique o local:** Deve estar em `public/images/`
3. **Verifique o formato:** PNG, JPG ou SVG
4. **Verifique o console:** Pressione F12 no navegador

### 🎨 **DICAS PARA SUA LOGO:**

- **Use cores vibrantes** (azul, amarelo, laranja)
- **Mantenha texto legível**
- **Teste em diferentes tamanhos**
- **Use fundo transparente** (PNG)
- **Mantenha proporção** 2.5:1 (320x128)

### ✅ **CHECKLIST FINAL:**

- [ ] Logo copiada para `public/images/logo.png`
- [ ] Nome correto do arquivo
- [ ] Formato PNG, JPG ou SVG
- [ ] Tamanho adequado (320x128px recomendado)
- [ ] Acesse http://localhost:3000
- [ ] Verifique se aparece no topo
- [ ] Teste responsividade
- [ ] Sem erros no console

---

**🎯 RESULTADO:** Logo personalizada no topo da landing page! 🚀












