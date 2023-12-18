import { ErrorFactory } from '../../../common/errors';

export enum InvoiceErr {
  SEND_INVOICE_LINK_FAILED = 'loyalty/send-failed',
  SEND_INVOICE_LINK_FAILED_FORBIDDEN = 'loyalty/send-failed-forbidden',
  INVOICE_ID_NOT_FOUND = 'loyalty/invoice-id-not-found',
}

export const errors = {
  [InvoiceErr.SEND_INVOICE_LINK_FAILED]: 'Failed to send link',
  [InvoiceErr.SEND_INVOICE_LINK_FAILED_FORBIDDEN]:
    'Failed to send link, forbidden',
  [InvoiceErr.INVOICE_ID_NOT_FOUND]: 'Invoice not found',
};

export const errorFactory = new ErrorFactory<InvoiceErr>(
  'Shop/Invoice',
  errors,
);
