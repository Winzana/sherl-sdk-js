import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(InvoiceErr.SEND_FAILED);
  }
};
