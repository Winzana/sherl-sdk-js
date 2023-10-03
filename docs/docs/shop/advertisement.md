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