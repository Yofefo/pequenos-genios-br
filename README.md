# Projeto Pequenos Gênios - Landing Page

Landing page responsiva para o "Projeto Pequenos Gênios - Método Brinca+" desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- **Responsiva**: Mobile-first design
- **Performance**: Otimizada para CLS baixo
- **SEO**: Meta tags, OpenGraph e Twitter Cards
- **Acessibilidade**: Semântica adequada e contraste otimizado
- **Tracking**: Meta Pixel integrado com eventos personalizados
- **Deploy-ready**: Pronta para Vercel

## 🛠️ Stack Tecnológica

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Meta Pixel (tracking)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 🎨 Paleta de Cores

- **Primária**: #5B8DEF (azul)
- **Secundária**: #F6C945 (dourado)
- **Acento**: #F47C7C (coral)
- **Fundo**: #FFFDF7 (off-white)

## 📱 Seções da Landing Page

1. **Hero**: H1, subtítulo, bullets e CTA principal
2. **Benefícios**: 6 cards com benefícios do produto
3. **O que você recebe**: Lista de itens incluídos
4. **Como funciona**: 5 passos do processo
5. **Bônus**: Materiais extras de lançamento
6. **Prova Social**: 3 depoimentos com avaliações
7. **CTA**: Seção de oferta com preço
8. **Garantia**: 7 dias de garantia
9. **FAQ**: 6 perguntas frequentes
10. **Footer**: Links e informações de contato

## 🔧 Configuração do Meta Pixel

1. Edite o arquivo `src/lib/pixel.tsx`
2. Substitua `YOUR_PIXEL_ID_HERE` pelo seu Meta Pixel ID
3. Os eventos são disparados automaticamente nos CTAs

## 📊 Eventos de Tracking

- `data-evt="cta-primary"`: Disparado nos botões principais
- `PageView`: Carregado automaticamente
- `InitiateCheckout`: Pode ser adicionado na página de checkout

## 🚀 Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal com SEO
│   ├── page.tsx            # Página principal
│   ├── checkout/
│   │   └── page.tsx        # Página de checkout stub
│   └── globals.css         # Estilos globais
├── components/
│   ├── Hero.tsx            # Seção hero
│   ├── Benefits.tsx        # Benefícios
│   ├── Includes.tsx        # O que você recebe
│   ├── HowItWorks.tsx      # Como funciona
│   ├── Bonus.tsx           # Bônus
│   ├── SocialProof.tsx     # Prova social
│   ├── CTA.tsx             # CTA principal
│   ├── Guarantee.tsx       # Garantia
│   ├── FAQ.tsx              # FAQ
│   └── Footer.tsx           # Footer
└── lib/
    └── pixel.tsx            # Meta Pixel tracking
```

## 🎯 Próximos Passos

1. **Imagens**: Substitua os placeholders por imagens reais
2. **Checkout**: Integre sistema de pagamento real
3. **Analytics**: Configure Google Analytics se necessário
4. **Testes**: Implemente testes automatizados
5. **Otimizações**: Adicione lazy loading e otimizações de performance

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- E-mail: contato@pequenosgenios.com
- WhatsApp: (11) 99999-9999

---

Desenvolvido com ❤️ para o desenvolvimento das crianças