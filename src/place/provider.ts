import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getPlaces } from './actions';
import { errorFactory } from './errors';

class PlaceProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Retrieves a paginated list of places based on the provided filters.
   *
   * @param {number} page - The page number of the paginated results (default: 1).
   * @param {number} itemsPerPage - The number of items per page in the paginated results (default: 10).
   * @param {Object} filters - An object containing filters to apply to the query.
   * @returns {Promise<Pagination<IPlace>>} A promise that resolves to a paginated list of places.
   * @throws {Error} If the API request fails or returns an unexpected response.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/place#get-places-list Sherl SDK documentation} for further information
   */
  public getPlaces = this.withFetcher(getPlaces);
}

export { PlaceProvider };
