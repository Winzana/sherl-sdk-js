import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { InvoiceErr, errorFactory } from '../../errors/invoice/errors';
import { IOrderResponse } from '../../types';

export const sendLinkToPaidOnline = async (
  fetcher: Fetcher,
  invoiceId: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      StringUtils.bindContext(endpoints.SEND_LINK_PAYED_ONLINE, {
        id: invoiceId,
      }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(InvoiceErr.SEND_INVOICE_LINK_FORBIDDEN);
      case 404:
        throw errorFactory.create(InvoiceErr.INVOICE_ID_NOT_FOUND);
      default:
        throw errorFactory.create(InvoiceErr.SEND_INVOICE_LINK_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(InvoiceErr.SEND_INVOICE_LINK_FAILED),
    );
  }
};
