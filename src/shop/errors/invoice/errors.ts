import { ErrorFactory } from '../../../common/errors';

export enum InvoiceErr {
  SEND_FAILED = 'loyalty/send-failed',
}

export const errors = {
  [InvoiceErr.SEND_FAILED]: 'Failed to send link',
};

export const errorFactory = new ErrorFactory<InvoiceErr>(
  'Shop/Invoice',
  errors,
);
