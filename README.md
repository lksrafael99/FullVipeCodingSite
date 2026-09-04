# Full Vibe Coding — Landing Page

Landing page comercial em Next.js criada na raiz do projeto. As pastas `HCS-AI-OS` e `hcs-boilerplate` são referências somente leitura e não fazem parte da aplicação.

## Desenvolvimento

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` e configure o canal de compra antes de publicar.

## Pontos de edição

- Preço, oferta e mensagem: `config/purchase.ts`
- WhatsApp e checkout confirmado: `.env.local`
- Fluxo de compra: `services/purchase-service.ts`
- Conteúdo das seções: `components/`
- Estilos e tokens: `app/globals.css`
- Área de membros e comparação da oferta: `components/members-area.tsx`
- Logo e composição principal do Hero: `components/hero.tsx`
- Logo oficial da marca: `public/brand/full-vibe-coding-logo.png`
