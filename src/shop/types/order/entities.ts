import { transfer } from 'mangopay2-nodejs-sdk';

import { IOrganizationResponse } from '../../../organization/types';
import { IPerson } from '../../../person/types';
import {
  IOffer,
  IProductResponse,
  ShopProductTypeEnum,
} from '../product/entities';
import { IDiscount } from '../discount/entities';
import { IAddress } from '../../../place/types';
import { PaginationFilters } from '../../../common';

export interface IOrderResponse {
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

export interface IShopOrderRefund {
  id: string;
  productId: string;
  amount: number;
  askedBy: string;
  createdAt: Date;
  metadatas: any;
}

export interface IOrderStatusHistory {
  id: string;
  message: string;
  status: number;
  userUri: string;
  createdAt: Date;
  latitude: number;
  longitude: number;
}

export interface IOrderCommission extends transfer.TransferData {
  createdAt: Date;
}

export interface IOrderItem {
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

export interface IOrderItemProductSchedule {
  allowedFromDate: Date;
  allowedUntilDate: Date;
}

export interface IOrderItemProductOption {
  id: string;
  name: string;
  items: IOrderItemProductOptionItem[];
}

export interface IOrderItemProductOptionItem {
  name: string;
  priceTaxIncluded: number;
  quantity: number;
}

export enum ShopMeansOfPaymentEnum {
  CARD = 'CARD', // Par carte
  ADVANCE_PAYMENT = 'ADVANCE_PAYMENT', // Acompte + Paiement en ligne
  ADVANCE_PAYMENT_EXTERNAL = 'ADVANCE_PAYMENT_EXTERNAL', // Acompte + Paiement sur place
  EXTERNAL = 'EXTERNAL', // Sur place
  CREDIT = 'CREDIT', // Avec virtual money
}

export interface IPayment {
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

interface IRefunds {
  object: string;
  data: any[];
  has_more: boolean;
  url: string;
}

export interface IPaymentMethodDetails {
  card: ICard;
  type: string;
}

export interface ICard {
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

export interface IChecks {
  address_line1_check: any;
  address_postal_code_check: any;
  cvc_check: any;
}

export interface IBillingDetails {
  address: IAddress;
  email: string;
  name: string;
  phone: string;
}

export enum OrderStatusEnum {
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

export interface IOrderFindByDto extends PaginationFilters {
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

export enum OrganizationServiceTypeEnum {
  SERVICE_TYPE_TABLE = 'SERVICE_TYPE_TABLE',
  SERVICE_TYPE_BAR = 'SERVICE_TYPE_BAR',
}

export enum OrganizationFilterByUsageEnum {
  BUY = 'BUY',
  USED = 'USED',
}

export interface ISort {
  order: -1 | 1 | 'asc' | 'desc';
  field: string;
}
