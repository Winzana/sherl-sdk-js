---
id: claim-types
title: Claim types
---

# Claim Types

## IClaim
```ts
interface IClaim {
  replies: any[];
  schedules: Schedules;
  id: string;
  issueMessage: string;
  issueTitle: string;
  personId: string;
  orderId: string;
  createdAt: string;
  uri: string;
  consumerId: string;
  status: string;
  person: IPerson;
  order: IOrderResponse;
}
```

