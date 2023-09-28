---
id: organization-background-image
title: Background Image
---

This page list all actions about organization's background image.

## Create background image from media

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createBackgroundImageFromMedia(organizationId: string, mediaId: string, image: IImageObject);
```

Retrieve interface documentation of [IImageObject](../media-types#iimageobject)(`image`).

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Create background image

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).createBackgroundImage(
  organizationId: string, 
  mediaId: string,
  image: File,
  onUploadProgress?: (progresssEvent: any) => void
);
```

`image` is used with a FormData to send into api using **'Content-Type': 'multipart/form-data'**.

`onUploadProgress` allows you to track the progress of the image transmission.

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.

## Delete background image

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteBackgroundImage(organizationId: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.