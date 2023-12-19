import { ErrorFactory } from '../../../common/errors';

export enum PaymentErr {
  DELETE_CARD_FAILED = 'payment/delete-card-failed',
  DELETE_CARD_FAILED_FORBIDDEN = 'payment/delete-card-failed-forbidden',
  REQUEST_CREDENTIALS_CARD_FAILED = 'payment/request-credentials-failed',
  REQUEST_CREDENTIALS_CARD_FAILED_FORBIDDEN = 'payment/request-credentials-failed-forbidden',
  SAVE_CARD_FAILED = 'payment/save-card-failed',
  SAVE_CARD_FAILED_FORBIDDEN = 'payment/save-card-failed-forbidden',
  SET_DEFAULT_CARD_FAILED = 'payment/set-default-card-failed',
  SET_DEFAULT_CARD_FAILED_FORBIDDEN = 'payment/set-default-card-failed-forbidden',
  VALIDATE_CARD_FAILED = 'payment/validate-card-failed',
  VALIDATE_CARD_FAILED_FORBIDDEN = 'payment/validate-card-failed-forbidden',

  CARD_NOT_FOUND = 'payment/card-not-found',
}

export const errors = {
  [PaymentErr.DELETE_CARD_FAILED]: 'Failed to delete card',
  [PaymentErr.DELETE_CARD_FAILED_FORBIDDEN]: 'Failed to delete card, forbidden',
  [PaymentErr.REQUEST_CREDENTIALS_CARD_FAILED]: 'Failed to request credentials',
  [PaymentErr.REQUEST_CREDENTIALS_CARD_FAILED_FORBIDDEN]:
    'Failed to request credentials, forbidden',
  [PaymentErr.SAVE_CARD_FAILED]: 'Failed to save card',
  [PaymentErr.SAVE_CARD_FAILED_FORBIDDEN]: 'Failed to save card, forbidden',
  [PaymentErr.SET_DEFAULT_CARD_FAILED]: 'Failed to set default card',
  [PaymentErr.SET_DEFAULT_CARD_FAILED_FORBIDDEN]:
    'Failed to set default card, forbidden',
  [PaymentErr.VALIDATE_CARD_FAILED]: 'Failed to validate card',
  [PaymentErr.VALIDATE_CARD_FAILED_FORBIDDEN]:
    'Failed to validate card, forbidden',
  [PaymentErr.CARD_NOT_FOUND]: 'Card not found',
};

export const errorFactory = new ErrorFactory<PaymentErr>(
  'Shop/Payment',
  errors,
);
