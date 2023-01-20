import { IOrganizationResponse } from '../../../organization/types';
import { IProductResponse, ICategoryResponse } from '../product/types';

export interface IDiscountResponse {
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

export interface IDateRestriction {
  date: Date;
  dayOfWeek: string;
  fromHour: Date;
  toHour: Date;
}

export interface IProductRestriction {
  requiredQuantity: number;
  product: IProductResponse;
  categoryUri: string;
  category: ICategoryResponse;
}

export enum DiscountTypeEnum {
  PERCENT = 'percent',
  AMOUNT = 'amount',
}

export interface IDiscountParameter {
  id: 'string';
  name: 'string';
  availableFrom: 'Date';
  availableUntil: 'Date';
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: 'percent';
  code: 'string';
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: ['string'];
  visibleToPublic: boolean;
  productRestrictions: [
    {
      requiredQuantity: number;
      productUri: 'string';
      categoryUri: 'string';
    },
  ];
  dateRestrictions: [
    {
      date: 'Date';
      dayOfWeek: 'string';
      fromHour: 'Date';
      toHour: 'Date';
    },
  ];
}
