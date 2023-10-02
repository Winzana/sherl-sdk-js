import { ErrorFactory } from '../../../common/errors';

export enum PaymentErr {
  REQUEST_CREDENTIALS_FAILED = 'payment/request-credentials-failed',
}

export const errors = {
  [PaymentErr.REQUEST_CREDENTIALS_FAILED]: 'Failed to request credentials',
};

export const errorFactory = new ErrorFactory<PaymentErr>(
  'Shop/Payment',
  errors,
);
