import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { InvoiceErr, errorFactory } from '../../errors/invoice/errors';
import { IOrderResponse } from '../../types';

/**
 * Sends a link for online payment of a specific invoice.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} invoiceId - The unique identifier of the invoice for which the payment link is being sent.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the order related to the invoice.
 */
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
