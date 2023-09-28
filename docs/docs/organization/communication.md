---
id: organization-communication
title: Communication
---

## Set communication

<span class="badge badge--warning">Require authentication</span>

```ts
await organization(client).setCommunication(organizationId: string, info: ICommunicationInputDto);
```

```ts
interface ICommunicationInputDto {
  title: string;
  message: string;
  icon: string;
}
```

This call returns an [IOrganizationResponse](../organization-types#iorganizationresponse) object.