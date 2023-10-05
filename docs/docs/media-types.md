---
id: media-types
title: Media types
---

## IImageObject 
```ts
interface IImageObject {
  id?: string;
  consumerId?: string;
  domain?: string;
  uri?: string;
  width?: number;
  height?: number;
  caption: IMediaObject;
  thumbnail?: IImageObject;
  createdAt?: Date;
}
```

## IMediaObject
```ts
interface IMediaObject {
  contentUrl: string;
  description?: string;
  duration?: string;
  encodingFormat: string;
  size?: number;
  name: string;
  id: string;
}
```