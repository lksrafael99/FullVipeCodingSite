# Integração de compra

A landing possui uma única oferta pública: acesso vitalício à Área de Membros por R$ 497.

O endereço de pagamento fica centralizado em `config/purchase.ts` e deve ser informado por `NEXT_PUBLIC_CHECKOUT_URL` somente depois que o checkout atual for confirmado. Não existe endereço antigo como fallback.

Sem essa variável, o botão usa `NEXT_PUBLIC_PURCHASE_WHATSAPP` quando configurado. Se nenhum canal estiver disponível, a interface informa que o canal de compra ainda está em configuração.
