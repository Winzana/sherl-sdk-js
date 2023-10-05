import { PaginationFilters } from '../../../common';
import { IOrganizationResponse } from '../../../organization/types';
import { IProductResponse, ICategoryResponse } from '../product/entities';

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
  id: string;
  name: string;
  availableFrom: Date;
  availableUntil: Date;
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: string;
  code: string;
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: string[];
  visibleToPublic: boolean;
  productRestrictions: [
    {
      requiredQuantity: number;
      productUri: string;
      categoryUri: string;
    },
  ];
  dateRestrictions: [
    {
      date: Date;
      dayOfWeek: string;
      fromHour: Date;
      toHour: Date;
    },
  ];
}

export interface IDiscount {
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

export interface IDiscountPublicFilter extends PaginationFilters {
  ownerUri?: string;
  availableFrom?: Date;
  availableUntil?: Date;
}

export interface IDiscountFilter extends IDiscountPublicFilter {
  id?: string;
  uri?: string;
  name?: string;
  ownerUris?: string[];
  consumerId: string;
  validFor?: Date;
  enabled?: boolean;
  isSubscription?: boolean;
  public?: boolean;
  visibleToPublic?: boolean;
  highlight?: boolean;
  cumulative?: boolean;
  discountType?: DiscountTypeEnum;
  code?: string;
  toCode?: string;
  noCode?: boolean;
  percentage?: number;
  amount?: number;
  quantity?: number;
  quantityPerUser?: number;
  customerUri?: string;
  productUris?: string[];
  noProduct?: boolean;
  productRestrictions?: IProductRestriction;
  dateRestrictions?: IDateRestriction;
  toDate?: Date;
  toMe?: string;
  createdAt?: {
    from?: Date;
    to?: Date;
  };
  updatedAt?: {
    from?: Date;
    to?: Date;
  };
  offPeakHours?: boolean;
  toValidate?: boolean;
}
