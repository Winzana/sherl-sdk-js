---
id: media
title: Media
---

## Get file by id

<span class="badge badge--warning">Require authentication</span>

Retrieve file informations

```ts
const file = await media(client).getFile(query: IMediaQuery);
```

```ts
interface IMediaQuery {
  id: string;
  domain: string;
  type?: TypeEnum;
}

enum TypeEnum {
  FILE = 'file',
  MOVIE = 'movie',
}
```

This call returns an [IImageObject](media-types#iimageobject) object.

## Upload file

<span class="badge badge--warning">Require authentication</span>

Upload a file

```ts
const file = await media(client).uploadFile(formData: FormData, query: IMediaQuery);
```

This call returns an [IImageObject](media-types#iimageobject) object.

## Delete file

<span class="badge badge--warning">Require authentication</span>

Delete a file

```ts
const file = await media(client).deleteFile(mediaId: string);
```

This call returns a string.
```
Media successfully deleted : ${id}
```
