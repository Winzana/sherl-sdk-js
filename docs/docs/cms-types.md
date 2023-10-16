---
id: cms-types
title: Cms types
---

## ICreateCaptionOutputDto

```ts
interface ICreateCaptionOutputDto {
  contentUrl: string;
  description: string;
  duration: string;
  encodingFormat: string;
  size: number;
  name: string;
  id: string;
}
```

## ICreateThumbnailOutputDto

```ts
interface ICreateThumbnailOutputDto {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICreateCaptionOutputDto;
}
```

## IArticle
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