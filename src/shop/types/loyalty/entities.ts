import { PaginationFilters } from '../../../common';
import { IOrganizationResponse } from '../../../organization';
import { DiscountTypeEnum } from '../discount/entities';

export interface ILoyaltyCardFindByDto extends PaginationFilters {
  id?: string;
  uri?: string;
  ownerUri?: string;
  ownerUris?: string[];
  enabled?: boolean;
}

export interface ILoyaltyCard {
  id: string;
  uri: string;
  ownerUri: string;
  owner?: IOrganizationResponse;
  discountType: DiscountTypeEnum;
  percentage?: number;
  amount?: number;
  amountUsed?: number;
  rewards: ILoyaltyCardReward[];
  enabled: boolean;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoyaltyCardReward {
  requiredValue: number;
  discountType: DiscountTypeEnum;
  amount?: number;
  percentage?: number;
  discountUri: string;
}

export interface IShopLoyaltyCardUpdateInputDto {
  amount?: number;
  discountType: DiscountTypeEnum;
  percentage?: number;
  enabled?: boolean;
}
