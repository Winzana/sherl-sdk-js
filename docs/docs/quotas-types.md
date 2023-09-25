---
id: quotas-types
title: Quota types
---

## IQuotas
```ts
interface IQuotas {
  id: string;
  uri: string;
  consumerId: string;
  type: CommunicationTypeEnum;
  amount: number;
  allowNegative: boolean;
  ownerUri: string;
  sources: IQuotaSource[]; 
  createdAt: Date;
  updatedAt: Date;
}

interface IQuotaSource {
  id: string;
  uri?: string;
  lastApply: Date;
  nextApply: Date;
  amount: number;
  remaining: number;
  createdFrom?: string;
  createdBy?: string;
  createdAt?: Date;
  quotaId: string;
}
```

[//]: # (TODO: Change organization-types to communication-types)
`type` refers to [CommunicationTypeEnum](organization-types)