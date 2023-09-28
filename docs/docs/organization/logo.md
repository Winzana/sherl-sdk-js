---
id: organization-logo
title: Logo
---

This page list all actions available about organization's logo.

## Create logo from media

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).addLogoFromMedia(
  organizationId: string,
  mediaId: string,
  image: File,
  onUploadProgress?: (progressEvent: any) => void,
);
```

`image` is used with a FormData to send into api using **'Content-Type': 'multipart/form-data'**.

`onUploadProgress` allows you to track the progress of the image transmission.

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.


## Delete logo

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).deleteLogo(organizationId: string);
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.