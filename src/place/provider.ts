import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getPlaces } from './actions';
import { errorFactory } from './errors';

class PlaceProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getPlaces = this.withFetcher(getPlaces);
}

export { PlaceProvider };
