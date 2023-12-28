import { SherlClient } from '../common';
import { errorFactory } from './errors/errors';
import { AbstractProvider } from '../common/provider';
import { getQuotaFindOneBy } from './actions/get-quota-find-one-by.action';

/**
 * Retrieves a single quota based on the provided filters.
 *
 * @param {IQuotaFilter} filters - Optional filters to apply when fetching the quota.
 * @returns {Promise<IQuota>} - A promise that resolves to the retrieved quota.
 * @throws {Error} - Throws an error if the API request fails or the quota is forbidden.
 * @see {@link https://winzana.github.io/sherl-sdk-js/docs/quotas#find-quota-with-filter Sherl SDK documentation} for further information
 */
class QuotaProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  getQuotaFindBy = this.withFetcher(getQuotaFindOneBy);
}

export { QuotaProvider };
