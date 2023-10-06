---
id: gallery-types
title: Gallery types
---

## IGallery

```ts
interface IGallery {
  id: string;
  uri: string;
  consumerId: string;
  categoryUri: string;
  category?: ICategoryResponse;
  media: IImageObject;
  createdAt: Date;
  updatedAt: Date;
}
```

- [ICategoryResponse](shop-types#icategoryresponse)(`category`)
- [IImageObject](media-types#iimageobject)(`media`)

## IDynamicBackground

```ts
interface IDynamicBackground {
  id: string;
  uri: string;
  medias: IImageObject[];
  metadatas: { [key: string]: any };
  createdAt: Date;
  versionCreatedAt: Date;
  updatedAt: Date;
  deleted: boolean;
  displayZones: DisplayZoneEnum[];
  locations: IPoiZone[];
  geoshapes?: IGeoShape[];
  version: number;
  parentUri?: string;
  updatedBy?: string;
  createdBy?: string;
  versionCreatedBy?: string;
}
```
- [IImageObject](media-types#iimageobject)(`medias`)
- [DisplayZoneEnum](shop-types#displayzoneenum)(`displayZones`)
- [IPoiZone](#ipoizone)(`locations`)
- [IGeoShape](#igeoshape)(`geoshapes`)

## IPoiZone

```ts
interface IPoiZone {
  distance?: string;
  location?: IAddress;
}
```

- [IAddress](place-types#iaddress)(`location`)

## IGeoShape

```ts
interface IGeoShape {
  type: string;
  coordinates: number[];
  radius: string;
}
```