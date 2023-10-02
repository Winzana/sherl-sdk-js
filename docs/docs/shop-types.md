---
id: shop-types
title: Shop types
---

# Product

### ICategoryResponse
```ts
interface ICategoryResponse {
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories: ICategoryResponse[];
}
```

### IProductResponse
```ts
interface IProductResponse {
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  slogan: string;
  description: string;
  categoryUri: string;
  offers: IOffer[];
  metadatas: IMetadatas;
  options: IOption[];
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  category: null;
}
```

### IOffer
```ts
interface IOffer {
  priceDiscount: number;
  price: number;
  priceTaxIncluded: number;
  taxRate: number;
  frequency: OfferFrequencyEnum;
}

enum OfferFrequencyEnum {
  ONCE = 'once',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}
```

### IMetadatas
```ts
interface IMetadatas {
  degreeOfAlcohol: string;
}
```

### IOption
```ts
interface IOption {
  id: string;
  name: string;
  items: IOptionItem[];
  required: boolean;
  multiple: boolean;
  rangeMin: number;
  rangeMax: number;
}

interface IOptionItem {
  name: string;
  priceTaxIncluded: number;
  available: boolean;
} 
```

### ShopProductTypeEnum

```ts
enum ShopProductTypeEnum {
  CREDIT = 'CREDIT',
  DEFAULT = 'DEFAULT',
  ROOM = 'ROOM',
  TIP = 'TIP',
  SERVICE = 'SERVICE',
  PLAN = 'PLAN',
  QUOTA = 'QUOTA',
  REFUND = 'REFUND', // Un avoir
}
```


### IPublicProductResponse

```ts
export interface IPublicProductResponse {
  id: string;
  uri: string;
  consumerId: string;
  type: ShopProductTypeEnum;
  parentUri: string;
  parent: IPublicProductResponse;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  categoryUri: string;
  categoryUris: string[];
  category: IPublicCategoryResponse;
  categories: IPublicCategoryResponse[];
  isEnable: boolean;
  offers: IOffer[];
  metadatas: any;
  options: IOption[];
  organizationUri: string;
  isCustom: boolean;
  photos: IImageObject[];
  restrictions: { [key: string]: string[] };
  createdAt: Date;
  updatedAt: Date;
}
```

- *product* : [ShopProductTypeEnum](#shopproducttypeenum)(`type`), [IPublicCategoryResponse](#ipubliccategoryresponse)(`category`, `categories`), [IOffer](#ioffer)(`offers`), [IOption](#ioption)(`options`)
- *media* : [IImageObject](media-types#iimageobject)(`photos`)

### IPublicCategoryResponse

```ts
interface IPublicCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  parentUri: string;
  globalUri: string;
  parent: IPublicCategoryResponse;
  color: string;
  name: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  subCategories: IPublicCategoryResponse[];
  createdAt: Date;
  updatedAt: Date;
  aggCategory: string;
  is: boolean;
}
```

# Wallet

### IRib

```ts
interface IRib {
  iban: string;
  bic: string;
  ibanId?: string;
}
```

### IWallet
```ts
interface IWallet {
  userId: string;
  walletId: string;
}
```

# Discount

### IDiscount
```ts
interface IDiscount {
  id: string;
  uri: string;
  name: string;
  ownerUri: string;
  owner: IOrganizationResponse;
  consumerId: string;
  availableFrom: Date;
  availableUntil: Date;
  public: boolean;
  visibleToPublic: boolean;
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: DiscountTypeEnum;
  code: string;
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: string[];
  productRestrictions: IProductRestriction[];
  dateRestrictions: IDateRestriction[];
  createdAt: Date;
  updatedAt: Date;
}
```

 - *organization* : [IOrganizationResponse](organization-types#iorganizationresponse)


 ## DiscountTypeEnum
 ```ts
enum DiscountTypeEnum {
  PERCENT = 'percent',
  AMOUNT = 'amount',
}
```

## IProductRestriction
```ts
interface IProductRestriction {
  requiredQuantity: number;
  product: IProductResponse;
  categoryUri: string;
  category: ICategoryResponse;
}
```

- *produit* : [IProductResponse](#iproductresponse)(`product`), [ICategoryResponse](#icategoryresponse)(`category`)


## IDateRestriction
```ts
interface IDateRestriction {
  date: Date;
  dayOfWeek: string;
  fromHour: Date;
  toHour: Date;
}
```

# Order

### IOrderResponse
```ts
interface IOrderResponse {
  id: string;
  uri: string;
  consumerId: string;
  organization: IOrganizationResponse;
  customer: IPerson;
  orderNumber: number;
  orderNumberOfDay: number;
  orderStatus: OrderStatusEnum;
  type: ShopProductTypeEnum;
  meansOfPayment: ShopMeansOfPaymentEnum;
  payments: IPayment[];
  acceptedOffer: IOffer[];
  price: number;
  priceTaxIncluded: number;
  priceAdvancePayment: number;
  priceCommission: number;
  priceTaxIncludedWithCommission: number;
  priceToPay: number;
  numberOfCredit: number;
  billingAddress: IAddress;
  orderedItems: IOrderItem[];
  orderStatusHistory: IOrderStatusHistory[];
  commission: IOrderCommission;
  refunds: IShopOrderRefund[];
  metadatas: any;
  sponsorshipCode: string;
  discountCode: string;
  discountToUsefull: IDiscount[];
  subscriptionBeginDate: Date;
  isFreeTrial: boolean;
  createdAt: Date;
  updatedAt: Date;
}

enum OrderStatusEnum {
  BASKET = 0,
  BASKET_VALIDATED = 100,
  WAITING_PAYMENT = 200,
  PAYMENT_REFUSED = 300,
  PAYED = 400,
  WAITING_VALIDATION = 500,
  ORDER_REFUSED = 600,
  ORDER_ACCEPTED = 700,
  ORDER_IN_PROGRESS = 800,
  ORDER_READY = 900,
  FINISHED = 1000,
  REFUND = 1100,
  CONSUMER_CANCELLED = 9000,
  ORGANIZATION_CANCELLED = 9100,
}

enum ShopMeansOfPaymentEnum {
  CARD = 'CARD',
  ADVANCE_PAYMENT = 'ADVANCE_PAYMENT',
  ADVANCE_PAYMENT_EXTERNAL = 'ADVANCE_PAYMENT_EXTERNAL',
  EXTERNAL = 'EXTERNAL',
  CREDIT = 'CREDIT',
}

interface IPayment {
  id: string;
  uri: string;
  consumerId: string;
  customerUri: string;
  customer: IPerson;
  organizationUri: string;
  Id: string;
  CreationDate: number;
  Tag: string;
  DebitedFunds: {
    Currency: string;
    Amount: number;
  };
  CreditedFunds: {
    Currency: string;
    Amount: number;
  };
  Fees: {
    Currency: string;
    Amount: number;
  };
  DebitedWalletId: string;
  CreditedWalletId: string;
  AuthorId: string;
  CreditedUserId: string;
  Nature: string;
  Status: string;
  PaymentStatus: string;
  ExecutionDate: number;
  ResultCode: string;
  ResultMessage: string;
  Type: string;
  PaymentType: string;
  ExecutionType: string;
  createdAt: Date;
  updatedAt: Date;
  object: string;
  amount: number;
  amount_refunded: number;
  application: any;
  application_fee: any;
  application_fee_amount: any;
  balance_transaction: string;
  billing_details: IBillingDetails;
  captured: boolean;
  created: number;
  currency: string;
  description: string;
  disputed: boolean;
  failure_code: any;
  failure_message: any;
  fraud_details: any;
  invoice: any;
  livemode: boolean;
  metadata: any;
  on_behalf_of: any;
  order: any;
  outcome: any;
  paid: boolean;
  payment_intent: any;
  payment_method: string;
  payment_method_details: IPaymentMethodDetails;
  receipt_email: any;
  receipt_number: any;
  receipt_url: string;
  refunded: boolean;
  refunds: IRefunds;
  review: any;
  shipping: any;
  source_transfer: any;
  statement_descriptor: any;
  statement_descriptor_suffix: any;
  status: string;
  transfer_data: any;
  transfer_group: any;
  source: string;
}

interface IOrderItem {
  id: string;
  product: IProductResponse;
  productId: string;
  orderQuantity: number;
  price: number;
  priceTaxIncluded: number;
  priceDiscount: number;
  totalPrice: number;
  taxRate: number;
  options: IOrderItemProductOption[];
  schedules: IOrderItemProductSchedule[];
  offerId: number;
  refunded: boolean;
  metadatas: any;
}

interface IOrderItemProductOption {
  id: string;
  name: string;
  items: IOrderItemProductOptionItem[];
}

interface IOrderItemProductOptionItem {
  name: string;
  priceTaxIncluded: number;
  quantity: number;
}

interface IOrderItemProductSchedule {
  allowedFromDate: Date;
  allowedUntilDate: Date;
}

interface IOrderStatusHistory {
  id: string;
  message: string;
  status: number;
  userUri: string;
  createdAt: Date;
  latitude: number;
  longitude: number;
}

interface IOrderCommission extends transfer.TransferData{
  createdAt: Date;
}

interface IShopOrderRefund {
  id: string;
  productId: string;
  amount: number;
  askedBy: string;
  createdAt: Date;
  metadatas: any;
}

interface IBillingDetails {
  address: IAddress;
  email: string;
  name: string;
  phone: string;
}

interface IPaymentMethodDetails {
  card: ICard;
  type: string;
}

interface ICard {
  brand: string;
  checks: IChecks;
  country: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  installments: any;
  last4: string;
  network: string;
  three_d_secure: any;
  wallet: any;
}

interface IChecks {
  address_line1_check: string;
  address_postal_code_check: string;
  cvc_check: string;
}
```

*IOrderCommission* interface extends another interface which it provides by mangopay
[transfer](https://github.com/Mangopay/mangopay2-nodejs-sdk/blob/40cbafc3d70dc7464a90fae5778bd8ea2c52315a/typings/models/transfer.d.ts#L8)


- *organization* : [IOrganizationResponse](organization-types#iorganizationresponse)(`IOrderResponse->organization`)
- *person* : [IPerson](person-types#iperson)(`IPayment->customer`, `IOrderResponse->customer`)
- *product* : [ShopProductTypeEnum](#shopproducttypeenum)(`IOrderResponse->type`), [IOffer](#ioffer)(`IOrderResponse->acceptedOffer`), [IProductResponse](#iproductresponse)(`IOrderItem->product`)
- *place* : [IPlace](place-types#iaddress)(`IOrderResponse->billingAddress`), [IAddress](place-types#iaddress)(`IBillingDetails->address`)
- *discount* : [IDiscount](#idiscount)(`IOrderResponse->discountToUsefull`)
