import { ErrorFactory } from '../../../common/errors';

export enum OrderErr {
  CANCEL_ORDER_FAILED = 'order/cancel-order-failed',
  CANCEL_ORDER_FORBIDDEN = 'order/cancel-order-forbidden',
  GET_ORDER_FAILED = 'order/get-order-failed',
  GET_ORDER_FORBIDDEN = 'order/get-order-forbidden',
  GET_ORDERS_WITH_FILTER_FAILED = 'order/get-orders-with-filter-failed',
  GET_ORDERS_WITH_FILTER_FORBIDDEN = 'order/get-orders-with-filter-forbidden',
  GET_ORGANIZATION_ORDERS_FAILED = 'order/get-organization-orders-failed',
  GET_ORGANIZATION_ORDERS_FORBIDDEN = 'order/get-organization-orders-forbidden',
  UPDATE_ORDER_FAILED = 'order/update-order-failed',
  UPDATE_ORDER_FORBIDDEN = 'order/update-order-forbidden',
  ORDER_NOT_FOUND = 'order/order-not-found',
  ORGANIZATION_NOT_FOUND = 'order/organization-not-found',
  BAD_REQUEST = 'order/bad-request',
  NOT_ALLOWED = 'order/not-allowed',
  ALREADY_CHANGED = 'order/already-changed',
}

export const errors = {
  [OrderErr.CANCEL_ORDER_FAILED]: 'Failed to cancel order',
  [OrderErr.CANCEL_ORDER_FORBIDDEN]: 'Failed to cancel order, forbidden',
  [OrderErr.GET_ORDER_FAILED]: 'Failed to get order',
  [OrderErr.GET_ORDER_FORBIDDEN]: 'Failed to get order, forbidden',
  [OrderErr.GET_ORDERS_WITH_FILTER_FAILED]: 'Failed to get orders',
  [OrderErr.GET_ORDERS_WITH_FILTER_FORBIDDEN]:
    'Failed to get orders, forbidden',
  [OrderErr.GET_ORGANIZATION_ORDERS_FAILED]:
    'Failed to get organization orders',
  [OrderErr.GET_ORGANIZATION_ORDERS_FORBIDDEN]:
    'Failed to get organization orders, forbidden',
  [OrderErr.UPDATE_ORDER_FAILED]: 'Failed to update order',
  [OrderErr.UPDATE_ORDER_FORBIDDEN]: 'Failed to update order, forbidden',
  [OrderErr.ORDER_NOT_FOUND]: 'Order not found',
  [OrderErr.ORGANIZATION_NOT_FOUND]: 'Organization not found',
  [OrderErr.BAD_REQUEST]: 'Bad request',
  [OrderErr.NOT_ALLOWED]: 'Not allowed',
  [OrderErr.ALREADY_CHANGED]: 'Already changed',
};

export const errorFactory = new ErrorFactory<OrderErr>('Order', errors);
