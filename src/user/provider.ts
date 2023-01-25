import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { updateMyPassword } from './actions';
import { errorFactory } from './errors';

class UserProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public updateChangeMyPassword = this.withFetcher(updateMyPassword);
}

export { UserProvider };
