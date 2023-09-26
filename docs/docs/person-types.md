---
id: person-types
title: Person types
---

In all the interfaces you will find, it's possible that some properties inherit from interfaces from other domains. 

To access these properties, you need to have activated the domains on which the interfaces are based.

## IPerson
```ts
interface IPerson {
  id: string;
  uri: string;
  consumerId: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IPlace;
  myAddresses: IPlace[];
  subscriptionLocation: IGeoCoordinates;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganizationResponse;
  birthDate: Date;
  email: string;
  gender: GendersEnum;
  latitude: number;
  longitude: number;
  jobTitle: string;
  enabled: boolean;
  legalNotice: ILegalNoticeAcceptance;
  privacyPolicy: ILegalNoticeAcceptance;
  createdAt: Date;
  updatedAt: Date;
  picture: IImageObject;
  settings: ISettings;
  organizationFavorites: string[];
  mangopayUserId: string;
  mangopayWalletId: string;
  mangopayCards: IMangopayCard[];
  stripe: IStripe;
  lemonway: ILemonway;
  type: PersonTypeEnum;
  frequentedEstablishments: IFrequentedEstablishments[];
  metadatas: { [key: string]: any };
  statistics: {
    lastVisit: Date;
    firstVisit: Date;
    totalVisit: number;
    amountLastOrder: number;
    amountTotalOrder: number;
    frequentedEstablishments: IFrequentedEstablishments[];
    loyalCustomer: boolean;
  };
}

enum GendersEnum {
  MAN = 'man',
  WOMAN = 'woman',
  OTHER = 'other',
  NSP = 'nsp',
}

interface ILegalNoticeAcceptance {
  version: string;
  dateOfAcceptance: Date;
}

interface ISettings {
  notifications: {
    emailEnable: boolean;
    smsEnable: boolean;
    pushEnable: boolean;
  };
}

enum PersonTypeEnum {
  DEFAULT = 'DEFAULT',
  EMPLOYEE = 'EMPLOYEE',
  FOUNDER = 'FOUNDER',
  ADMIN = 'ADMIN',
}

```

 - *place* : [**IPlace**](place-types#iplace)(`address`,`myAddresses`), [**IGeoCoordinates**](place-types#igeocoordinates)(`subscriptionLocation`)
 - *organization* [**IOrganizationResponse**](organization-types#iorganizationresponse)(`affiliation`)
 - *media* [**IImageObject**](media-types#iimageobject)(`picture`)


## Interconnection with establishment
### IFrequentedEstablishments
```ts
interface IFrequentedEstablishments {
  organizationId: string;
  organizationName: string;
  firstVisit: Date;
  lastVisit: Date;
  isCustomer: boolean;
}
```
 ## Interconnection with payment methods

 ### MangoPay
 ```ts
 interface IMangopayCard {
  ExpirationDate: string;
  Alias: string;
  CardType: string;
  CardProvider: string;
  Country: string;
  Product: string;
  BankCode: string;
  Active: boolean;
  Currency: string;
  Validity: string;
  Id: string;
  Tag: string | null;
  CreationDate: number;
  Fingerprint: string;
  default: boolean;
}
```

### Lemonway
```ts
interface ILemonway {
  customerId: string;
  cards: ILemonwayCard[];
}

interface ILemonwayCard {
  id: number;
  transactionId: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  type: string;
  default: boolean;
  webKitToken: string;
}
```

### Stripe
```ts
interface IStripe {
  customerId: string;
  cards: IStripeCard[];
}

interface IStripeCard {
  id: string;
  object: string;
  address_city: string;
  address_country: string;
  address_line1: string;
  address_line1_check: string;
  address_line2: string;
  address_state: string;
  address_zip: string;
  address_zip_check: string;
  brand: string;
  country: string;
  customer: string;
  cvc_check: string;
  dynamic_last4: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  metadata: object;
  name: string;
  tokenization_method: string;
  default: boolean;
}
```
