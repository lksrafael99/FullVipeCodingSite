# Integração futura com o License Manager

A landing page não depende do sistema de licenças. Todos os CTAs chamam `startPurchase(plan)` em `services/purchase-service.ts`, que hoje abre uma URL externa ou uma conversa no WhatsApp.

## Fluxo planejado

1. O cliente escolhe `monthly` ou `lifetime`.
2. `startPurchase(plan)` envia o plano para `POST /api/checkout`.
3. A API cria a sessão no provedor de pagamentos.
4. O provedor confirma o pagamento por webhook assinado.
5. O backend cria ou localiza o cliente e registra a venda.
6. O License Manager reserva uma licença disponível do plano correto.
7. A licença é vinculada ao cliente.
8. O serviço de e-mail envia as instruções de acesso.
9. O estoque de licenças é atualizado de forma transacional.

## Alteração necessária na landing page

Troque somente a implementação de `startPurchase` por uma chamada ao endpoint. A interface e os componentes de preço não precisam mudar:

```ts
const response = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ plan: planId }),
});

const { checkoutUrl } = await response.json();
window.location.assign(checkoutUrl);
```

## Regras de segurança

- Nunca confie no preço enviado pelo navegador; resolva plano e valor no backend.
- Valide a assinatura e a idempotência do webhook.
- Aloque licenças apenas após confirmação definitiva do pagamento.
- Registre cada transição para auditoria e reprocessamento seguro.
- Não exponha chaves do provedor ou do License Manager em variáveis `NEXT_PUBLIC_*`.

## Configuração atual

- `NEXT_PUBLIC_PURCHASE_WHATSAPP`: número do WhatsApp com DDI/DDD, somente dígitos.
- `NEXT_PUBLIC_MONTHLY_CHECKOUT_URL`: checkout externo opcional do mensal.
- `NEXT_PUBLIC_LIFETIME_CHECKOUT_URL`: checkout externo opcional do vitalício.

Se uma URL externa estiver configurada, ela tem prioridade sobre o WhatsApp.
