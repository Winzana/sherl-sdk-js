---
id: advertisement
title: Advertisement
---

## Create advertisement

<span class="badge badge--warning">Required authentication</span>

```ts
await shop(client).createAdvertisement(advertisement: ICreateAdvertisementInputDto);
```

```ts
 interface ICreateAdvertisementInputDto {
  description: string;
  displayZones: DisplayZoneEnum[];
  backgroundImage?: IImageObject;
  name: string;
  redirectUrl: string;
  translations?: IAdvertisementTranslation[];
  metadatas?: any;
}
```

This interface using other interfaces :
 - [DisplayZoneEnum](../shop-types#displayzoneenum)(`displayZones`)
 - [IImageObject](../media-types#iimageobject)(`backgroundImage`)
 - [IAdvertisementTranslation](../shop-types#iadvertisementtranslation)(`translations`)

This call returns an [IAdvertisement](../shop-types#iadvertisement) object.

## Update advertisement

<span class="badge badge--warning">Required authentication</span>

```ts
await shop(client).updateAdvertisement(advertisementId: string, updatedAdvertisement: Partial<ICreateAdvertisementInputDto>);
```

This call returns an [IAdvertisement](../shop-types#iadvertisement) object.


## Delete advertisement

<span class="badge badge--warning">Required authentication</span>

```ts
await shop(client).deleteAdvertisement(advertisementId: string);
```

This call returns an [IAdvertisement](../shop-types#iadvertisement) object.

## Get advertisements (public or not)

<span class="badge badge--warning">Required authentication</span>

```ts
await shop(client).getAdvertisements(filters?: IFindAdvertisementInputDto);
```

<span class="badge badge--success">Public</span>

```ts
await shop(client).getPublicAdvertisements(filters?: IFindAdvertisementInputDto);
```

```ts
interface IFindAdvertisementInputDto extends PaginationFilters {
  displayDeleted?: boolean;
  displayZones?: DisplayZoneEnum[];
  shuffle?: boolean;
  q?: string;
  displayAllVersion?: boolean;
  panel?: string;
  uriOfPanels?: string[];
  sortBy?: string;
  sortOrder?: string;
}
```

This interface extends [PaginationFilters](../pagination#pagination-filters)

This interface using other interfaces :
 - [DisplayZoneEnum](../shop-types#displayzoneenum)(`displayZones`)
 - 
This call returns a [paginated](../pagination#pagination) array of [IAdvertisement](../shop-types#iadvertisement) objects.

## Get advertisement by id

<span class="badge badge--warning">Required authentication</span>

```ts
await shop(client).getAdvertisement(advertisementId: string);
```

This call returns an [IAdvertisement](../shop-types#iadvertisement) object.