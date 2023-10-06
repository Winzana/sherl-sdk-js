---
id: quotas-types
title: Quota types
---


## IQuota
```ts
interface IQuota {
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
```
`type` refers to [CommunicationTypeEnum](communication-types)

```ts
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
