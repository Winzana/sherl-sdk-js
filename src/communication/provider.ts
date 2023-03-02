import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getCommunicationByOrganizationId } from './actions';
import { errorFactory } from './errors';

class CommunicationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getCommunicationByOrganizationId = this.withFetcher(
    getCommunicationByOrganizationId,
  );
}

export { CommunicationProvider };
