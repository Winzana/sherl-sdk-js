---
id: organization-kyc
title: KYC
---

This page list all actions available to manage organization's kycs.

## Add KYC document

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).addKycDocument(
  organizationId: string,
  document: IAddKYCDocument,
  onUploadProgress?: (progressEvent: any) => void,
);
```

```ts
interface IAddKYCDocument {
  id: string;
  type: KYCDocumentTypeEnum;
  media: IImageObject;
}
```

`onUploadProgress` allows you to track the progress of the document transmission.

This call returns an [IKYCDocument](../organization-types#ikycdocument) object.

## Update KYC document

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).updateKycDocument(
  organizationId: string,
  documentId: string,
  document: IAddKYCDocument,
  onUploadProgress?: (progressEvent: any) => void,
);
```

```ts
interface IAddKYCDocument {
  id: string;
  type: KYCDocumentTypeEnum;
  media: IImageObject;
}
```

`onUploadProgress` allows you to track the progress of the document transmission.

This call returns an [IKYCDocument](../organization-types#ikycdocument) object.

## Get all documents

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).getAllKycDocuments(organizationId: string);
```

This call returns an array of  [IKYCDocument](../organization-types#ikycdocument) objects.