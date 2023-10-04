---
id: invoice
title: Invoice
---

This page list all actions available on shop invoices.

## Send link to paid online

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).sendLinkToPaidOnline(invoiceId: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.