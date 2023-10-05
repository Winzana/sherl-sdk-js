---
id: analytics
title: Analytics
---

## Get CA analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getCAAnalytics(filters?: ICAAnalyticsInputDto);
```

```ts
interface ICAAnalyticsInputDto extends IAnalyticsInputBaseDto {
  organizationId?: string;
  average?: boolean;
}
```

This interface extends [IAnalyticsInputBaseDto](analytics-types#ianalyticsinputbasedto).

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get notifications analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getNotificationsAnalytics(filters?: INotificationsAnalyticsInputDto);
```

```ts
interface INotificationsAnalyticsInputDto {
  beginDate?: string;
  endDate?: string;
  organizationId?: string;
}
```

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get audiences analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getAudiencesAnalytics(filters?: IAnalyticsInputBaseDto);
```
- [IAnalyticsInputBaseDto](analytics-types#ianalyticsinputbasedto).

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get products analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getProductsAnalytics(filters?: IProductAnalyticsInputDto);
```

```ts
interface IProductAnalyticsInputDto extends IAnalyticsInputBaseDto {
  productId?: string;
}
```

This interface extends [IAnalyticsInputBaseDto](analytics-types#ianalyticsinputbasedto).

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getAnalytics(filters?: IAnalyticsInputDto);
```

```ts
interface IAnalyticsInputDto {
  organizationId?: string;
  userId?: string;
  sort?: string;
}
```

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get BI analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getBIAnalytics(filters?: IAnalyticsFindBIInputDto);
```

```ts
interface IAnalyticsFindBIInputDto {
  index?: string;
  filters: any;
}
```

This call returns an array [IAnalyticResponse](analytics-types#ianalyticresponse) objects.

## Get tracking analytics

<span class="badge badge--warning">Require authentication</span>

```ts
await analytics(client).getTrackingAnalytics(filters?: IAnalyticsFindByInputDto);
```

```ts
interface IAnalyticsFindByInputDto extends PaginationFilters {
  id?: string;
  action?: TraceEnum;
  objectUri?: string;
  value?: any;
  sortBy?: string;
  sortOrder?: string;
  aggregateGroupBy?: string;
  aggregateSum?: string;
}
```

This interface extends [PaginationFilters](pagination#pagination-filters)

- [TraceEnum](analytics-types#traceenum)(`action`)

This call returns an [ISearchResult](pagination#isearchresult) of [ITrace](analytics-types#itrace) objects.