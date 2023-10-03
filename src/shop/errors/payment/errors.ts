import { ErrorFactory } from '../../../common/errors';

export enum PaymentErr {
  REQUEST_CREDENTIALS_FAILED = 'payment/request-credentials-failed',
  VALIDATE_CARD_FAILED = 'payment/validate-card-failed',
  SAVE_CARD_FAILED = 'payment/save-card-failed',
  SET_DEFAULT_CARD_FAILED = 'payment/set-default-card-failed',
  DELETE_CARD_FAILED = 'payment/delete-card-failed',
  SECURE_3D_CARD_FAILED = 'payment/secure-3d-card-failed',
}

export const errors = {
  [PaymentErr.REQUEST_CREDENTIALS_FAILED]: 'Failed to request credentials',
  [PaymentErr.VALIDATE_CARD_FAILED]: 'Failed to validate card',
  [PaymentErr.SAVE_CARD_FAILED]: 'Failed to save card',
  [PaymentErr.SET_DEFAULT_CARD_FAILED]: 'Failed to set default card',
  [PaymentErr.DELETE_CARD_FAILED]: 'Failed to delete card',
  [PaymentErr.SECURE_3D_CARD_FAILED]: 'Failed to secure 3d card',
};

export const errorFactory = new ErrorFactory<PaymentErr>(
  'Shop/Payment',
  errors,
);
