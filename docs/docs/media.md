---
id: media
title: Media
---

## Get file by id

<span class="badge badge--warning">Require authentication</span>

Retrieve file informations

```ts
const file = await Sherl.media.getFile('id', {
  domain: 'string',
  id: 'string',
});
```

Return a IMediaGetReturn.

## Upload file

<span class="badge badge--warning">Require authentication</span>

Upload a file

```ts
const formData = new FormData();
formData.append('upload', file.buffer, {
  filename: file.originalname,
});
const file = await Sherl.media.uploadFile({
  id: 'uuidv4';
  domain: 'string';
  type?: 'string';
}, formData);
```

Return a IMedia.

## Delete file

<span class="badge badge--warning">Require authentication</span>

Delete a file

```ts
const file = await Sherl.media.deleteFile({
  id: 'string';
  domain: 'string';
  type?: 'string';
});
```

Return a IMedia.
