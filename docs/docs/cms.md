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

## Delete Media

<span class="badge badge--warning">Require authentication</span>

Delete media

```ts
const deleteMedia = await deleteMedia(client).deleteMediaPage(data: ICMSArticleAddMediaDto);
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

Get article by media

```ts
const getArticleBySlug = await getArticleBySlug(client).getArticleBySlug(data: IArticle);
```

```ts
interface IArticle {
  id: string;
  uri: string;
  title: string;
  slug: string;
  resume: string;
  content: string;
  consumerId?: string;
  organizationUri?: string;
  type: ArticleTypeEnum;
  authorUri: string;
  author?: IPerson;
  beginDate: Date;
  endDate?: Date;
  tokens: {
    facebook: string;
  };
  status: ArticleStatusEnum;
  media?: IImageObject;
  metadatas?: { [key: string]: any };
  createdAt?: Date;
  updatedAt?: Date;
}
```

This call returns a string
