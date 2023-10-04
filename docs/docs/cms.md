---
id: Cms
title: Cms
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

## Add Media

<span class="badge badge--warning">Require authentication</span>

Add media

```ts
const addMedia = await addMedia(client).addMediaPage(data: ICMSArticleAddMediaDto);
```

```ts
interface ICMSArticleAddMediaDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
  thumbnail: ICreateThumbnailOutputDto;
}
```

This call returns a string
