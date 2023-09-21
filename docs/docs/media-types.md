---
id: media-types
title: Media types
---

## IMedia
```ts
interface IMedia {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICaption;
  thumbnail: IThumbnail;
  domain: string;
  consumerId: string;
}
```

## IFile
```ts
interface IFile {
  id: string;
  uri: string;
  width: number;
  height: number;
  consumerId: string;
  caption: ICaption;
  thumbnail: IThumbnail;
}
```

## ICaption
```ts
interface ICaption {
  id: string;
  size: number;
  contentUrl: string;
  description: string;
  name: string;
  encodingFormat: string;
  duration: string;
}
```

## IThumbnail
```ts
interface IThumbnail {
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICaption;
}
```