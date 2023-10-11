---
id: cms-types
title: cms types
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
