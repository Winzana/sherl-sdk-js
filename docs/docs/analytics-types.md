---
id: analytics-types
title: Analytics types
---

## IAnalyticResponse

```ts
interface IAnalyticResponse {
  id: string;
  key: string;
  value: 0;
  number: 0;
  metadata: { [key: string]: any };
}
```

## IAnalyticsInputBaseDto

```ts
interface IAnalyticsInputBaseDto {
  beginDate?: string;
  endDate?: string;
  userId?: string;
  limit?: number;
}
```
