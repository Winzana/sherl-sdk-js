---
id: organization-types
title: Organization types
---

In all the interfaces you will find, it's possible that some properties inherit from interfaces from other domains. 

To access these properties, you need to have activated the domains on which the interfaces are based.

## OrganizationFiltersDto
```ts
interface OrganizationFiltersDto extends PaginationFilters {
  id?: string;
  slug?: string;
  sponsorshipCode?: string;
  ids?: string[];
  q?: string;
  legalName?: string;
  location?: IPlace;
  latitude?: number;
  longitude?: number;
  uri?: string;
  distance?: string;
  types?: string[];
  serviceTypes?: string[];
  enabled?: string;
  isPublic?: boolean;
  categoryUri?: string;
  productUri?: string;
  productName?: string;
  deliveryQuery?: string;
  day?: string;
  hour?: string;
  isRoaming?: string;
  facetted?: string;
  analytics?: string;
  opinion?: string[];
  price?: string[];
  category?: string[];
  subCategory?: string[];
  noBind?: boolean;
  sort?: {
    field: string;
    order: string;
  };
}
```

See [PaginationFilters](pagination#pagination-filters)

## IOrganizationResponse

```ts
interface IOrganizationResponse {
  id: string;
  uri: string;
  sponsorshipCode: string;
  sponsoredByCode: string;
  sponsoredByUri: string;
  slug: string;
  consumerId: string;
  legalName: string;
  location: IPlace;
  myAddresses: IGeoCoordinates[];
  aggregateRating: number;
  subOrganizations: IOrganizationResponse[];
  email: string;
  employees: IEmployee[];
  wallet: IWallet;
  isPaymentAllowed: boolean;
  enabled: boolean;
  faxNumber: string;
  phoneNumber: string;
  website: string;
  founders: IFounder[];
  foundingDate: Date;
  knowsLanguage: ITaxonomy[];
  logo: IImageObject;
  backgroundImage: IImageObject;
  numberOfEmployees: number;
  parentOrganization: IOrganizationResponse;
  slogan: string;
  siret: number;
  smokingAllowed: boolean;
  openNow: boolean;
  openingHoursSpecification: IOpeningHoursSpecification[];
  isAccessibleForFree: boolean;
  isComingSoon: boolean;
  photos: IImageObject[];
  serviceType: ITaxonomy[];
  types: string[];
  advertisingText: string;
  communication: IOrganizationCommunication;
  geopoint: string;
  createdAt: Date;
  updatedAt: Date;
  metadatas: { [key: string]: any };
  categories: ICategoryResponse[];
  products: IProductResponse[];
  events: ICalendarEvent[];
  isRoaming: boolean;
  is: boolean;
  calendarId: string;
  opinion: number;
  opinionCount: number;
  blackListPersons: string[];
  thirdParty: {
    facebook: {
      accessToken: string;
      longLivedUserAccessToken: string;
      expirationDate: Date;
      userID: string;
    };
  };
  statistics: {
    firstVisit: Date;
    totalOrder: number;
    amountTotalOrder: number;
    subscription: ISubscription;
    opinion: number;
  };
  quotas: { [key: string]: IQuotas };
  configs: IPersonConfigValue[];
  displayed: {
    actualityContent: string;
    actualityTitle: string;
    backgroundImg: string;
    logoImg: string;
    highlightImg: string;
    city: string;
    id: string;
    isBarService: boolean;
    isOpen: boolean;
    latitude: number;
    longitude: number;
    name: string;
    position: string;
    type: string;
    weekTime: IDays[];
    metadatas: any;
  };
}
```

 - *place* : [**IPlace**](place-types#iplace)(`location`), [**IGeoCoordinates**](place-types#igeocoordinates)(`myAddresses`)
 - *shop* : [**IWallet**](shop-types#iwallet)(`wallet`), [**ICategoryResponse**](shop-types#icategoryresponse)(`categories`), [**IProductResponse**](shop-types#iproductresponse)(`products`)
 - *media* : [**IImageObject**](media-types#iimageobject)(`logo`, `backgroundImage`, `photo`)
 - *calendar* : [**IOpeningHoursSpecification**](calendar-types#iopeninghoursspecification)(`openingHoursSpecification`) , [**ICalendarEvent**](calendar-types#icalendarevent)(`events`), [**IDays**](calendar-types#idays)(`weekTime`)
 - *quota* : [**IQuotas**](quotas-types#iquotas)(`quotas`)

## IEmployee 
```ts
interface IEmployee extends IPerson {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  email: string;
}
```
See [**IPerson**](person-types#iperson)

## IFounder
```ts
interface IFounder extends IPerson {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
}
```
See [**IPerson**](person-types#iperson)

## ITaxonomy
```ts
interface ITaxonomy {
  id: string;
  uri: string;
  code: string;
  values: ITaxonomyValue[];
  parent?: ITaxonomy;
  childrens?: ITaxonomy[];
  createdAt: Date;
  updatedAt?: Date;
}

interface ITaxonomyValue {
  language: string;
  value: string;
  createdAt: Date;
  updatedAt?: Date;
}
```

## IOrganizationCommunication
```ts
interface IOrganizationCommunication {
  title: string;
  message: string;
  icon: string;
}
```

## IPersonConfigValue
```ts
interface IPersonConfigValue {
  code: string;
  value: any;
}
```

## IOrganizationDocumentsResponse
```ts
interface IOrganizationDocumentsResponse {
  bic: string;
  iban: string;
  id: string;
  ibanId: string;
  status: string;
}
```


