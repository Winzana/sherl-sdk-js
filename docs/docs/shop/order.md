---
id: order
title: Order
---

## Get orders list

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getOrders(filters: IOrderFindByDto);
```

```ts
interface IOrderFindByDto extends PaginationFilters {
  id?: string;
  type?: ShopProductTypeEnum;
  q?: string;
  date?: string;
  dateRangeMin?: string;
  dateRangeMax?: string;
  scheduleDateRangeMin?: string;
  scheduleDateRangeMax?: string;
  orderNumber?: number;
  orderStatus?: OrderStatusEnum;
  orderStatusTab?: OrderStatusEnum[];
  customerId?: string;
  customerName?: string;
  meansOfPayment?: string;
  serviceType?: OrganizationServiceTypeEnum;
  amout?: number;
  filterByUsage?: OrganizationFilterByUsageEnum;
  sort?: ISort;
}

enum OrganizationServiceTypeEnum {
  SERVICE_TYPE_TABLE = 'SERVICE_TYPE_TABLE',
  SERVICE_TYPE_BAR = 'SERVICE_TYPE_BAR',
}

enum OrganizationFilterByUsageEnum {
  BUY = 'BUY',
  USED = 'USED',
}

interface ISort {
  order: -1 | 1 | 'asc' | 'desc';
  field: string;
}

```
See [**PaginationFilters**](../pagination#pagination-filters)

- *shop/product* [ShopProductTypeEnum](../shop-types#shopproducttypeenum)

This call returns a [paginated](../pagination#pagination) array of [IOrderResponse](../shop-types#iorderresponse) objects.

## Get order by id

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getOrder(orderId: string);
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Cancel order

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).cancelOrder(orderId: string, cancelOrderDates: ICancelOrderInputDto);
```

```ts
interface ICancelOrderInputDto {
  allowedFromDate: string;
  allowedUntilDate: string;
}
```

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Update order

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).updateOrderStatus(orderId: string, status: OrderStatusEnum);
```

- [OrderStatusEnum](../shop-types#orderstatusenum)(`status`)

This call returns an [IOrderResponse](../shop-types#iorderresponse) object.

## Get organization orders

<span class="badge badge--warning">Require authentication</span>

```ts
await shop(client).getOrganizationOrders(organizationId: string, filters?: IOrderFindByDto);
```

- [IOrderFindByDto](#get-orders-list)

This call returns a [paginated](../pagination#pagination) array of [IOrderResponse](../shop-types#iorderresponse)