---
id: claim-types
title: Claim types
---

# Claim Types

## IClaim
```ts
interface IClaim {
  replies: IClaimReply[];
  schedules: ISchedules;
  id: string;
  issueMessage: string;
  issueTitle: string;
  personId: string;
  orderId: string;
  createdAt: string;
  uri: string;
  consumerId: string;
  status: ClaimStatusEnum;
  person: IPerson;
  order: IOrderResponse;
}
```

### ISchedules
```ts
interface ISchedules {
  allowedFromDate: string;
  allowedUntilDate: string;
}
```

### IClaimReply
```ts
interface IClaimReply {
  content: string;
  personId: string;
  createdAt: Date;
}
```

### ClaimStatusEnum
```ts
enum ClaimStatusEnum {
  NEW = 'NEW',
  READ = 'READ',
  REFUND = 'REFUND',
  CLOSED = 'CLOSED',
}
```

