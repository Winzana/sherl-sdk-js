---
id: cms
title: CMS
---

## Create Static Page

<span class="badge badge--warning">Require authentication</span>

Create static page

```ts
const staticPage = await staticPage(client).createStaticPage(data: ICMSArticleStaticPageCreateInputDto);
```

```ts
interface ICMSArticleStaticPageCreateInputDto {
  id: string;
  title: string;
  content: string;
}
```

This call returns a string
