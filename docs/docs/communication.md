---
id: communication
title: Communication
---

This domain permit to get communication about differents domains.

## Get communication

<span class="badge badge--warning">Require authentication</span>

```ts
await communication(client).getCommunication(filters: ICommunicationFindByInputDto);
```

```ts
interface ICommunicationFindByInputDto {
  id?: string;
  uri?: string;
  consumerId?: string;
  senderUri?: string;
  receiverUri?: string;
  aboutUri?: string;
  channel?: CommunicationChannelEnum;
  type?: CommunicationTypeEnum;
}
```

- [**CommunicationChannelEnum**](communication-types#communication-enumerations)(`channel`)
- [**CommunicationTypeEnum**](communication-types#communication-enumerations)(`type`)

This call returns an [ISearchResult](pagination#isearchresult) of [ICommunication](communication-types#icommunication) objects.