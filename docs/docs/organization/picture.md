---
id: organization-picture
title: Picture
---

This page list all actions available on organization's pictures management.

## Create picture from media

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createPictureFromMedia(
  organizationId: string,
  pictureId: string,
  picture: IMediaCreateInputDto,
);
```

```ts
export type IMediaCreateInputDto = Pick<
  IImageObject,
  'id' | 'uri' | 'width' | 'height' | 'caption' | 'thumbnail'
>;
```

See [**IImageObject**](../media-types#iimageobject)

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse)

## Create picture

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createPicture(
  organizationId: string,
  pictureId: string,
  picture: File,
  onUploadProgress?: (progressEvent: any) => void,
);
```

`picture` is used with a FormData to send into api using **'Content-Type': 'multipart/form-data'**.

`onUploadProgress` allows you to track the progress of the image transmission.

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Delete a picture

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deletePicture(organizationId: string, pictureId: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.
