import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getCommunication } from './actions';
import { errorFactory } from './errors';

class CommunicationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getCommunication = this.withFetcher(getCommunication);
}

export { CommunicationProvider };
