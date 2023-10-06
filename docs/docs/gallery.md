---
id: gallery
title: Gallery
---

## Create gallery

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).createGallery(gallery: ICreateGalleryInputDto);
```

```ts
interface ICreateGalleryInputDto {
  categoryUri: string;
  media: IImageObject;
}
```

- [IImageObject](media-types#iimageobject)(`media`)

This call returns an [IGallery](gallery-types#igallery) object.

## Delete gallery

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).deleteGalerry(galleryId: string);
```

This call returns an [IGallery](gallery-types#igallery) object.

## Get all galleries

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).getGalleries(filters?: IGetGalleriesFilters);
```

```ts
interface IGetGalleriesFilters extends PaginationFilters {
  id?: string;
  uri?: string;
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).

This call returns a [paginated](pagination#pagination) array of [IGallery](gallery-types#igallery) objects.


## Register dynamic background

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).registerDynamicBackground(dynamicBackground: ICreateDynamicBackgroundInputDto);
```

```ts
interface ICreateDynamicBackgroundInputDto {
  medias: IImageObject[];
  metadatas?: { [key: string]: any };
  displayZones: DisplayZoneEnum[];
  locations?: IPoiZone[];
}
```

- [IImageObject](media-types#iimageobject)(`medias`)
- [DisplayZoneEnum](shop-types#displayzoneenum)(`displayZones`)
- [IPoiZone](gallery-types#ipoizone)(`locations`)

This call returns an [IDynamicBackground](gallery-types#idynamicbackground) object.

## Update dynamic background

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).updateDynamicBackground(dynamicBackgroundId: string, dynamicBackground: Partial<ICreateDynamicBackgroundInputDto>);
```

This call returns an [IDynamicBackground](gallery-types#idynamicbackground) object.

## Delete dynamic background

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).deleteDynamicBackground(dynamicBackgroundId: string);
```

This call returns an [IDynamicBackground](gallery-types#idynamicbackground) object.

## Get dynamic backgrounds list

<span class="badge badge--warning">Require authentication</span>

```ts
await gallery(client).getDynamicBackgrounds(filters?: IGetDynamicBackgroundFilters);
```

```ts
interface IGetDynamicBackgroundFilters extends PaginationFilters {
  uri?: string;
  id?: string;
  country?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  streetAddress?: string;
  createdAt?: string;
  departement?: string;
  complementaryStreetAddress?: string;
  name?: string;
  originId?: string;
  latitude?: number;
  longitude?: number;
  displayDeleted?: boolean;
  displayZones?: string[];
}
```

This interface extends [PaginationFilters](pagination#pagination-filters).

This call returns a [paginated](pagination#pagination) array of [IDynamicBackground](gallery-types#idynamicbackground) objects.