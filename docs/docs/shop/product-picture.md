---
id: product-picture
title: Product picture
---

## Add picture on product

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).addPictureToProduct(productId: string, mediaId: string);
```
*NB: You need to have your picture upload on your media files before run this request*

This call returns an [IProductResponse](../shop-types#iproductresponse) object.

## Remove picture on product

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).removePictureToProduct(productId: string, mediaId: string);
```

This call returns an [IProductResponse](../shop-types#iproductresponse) object.

