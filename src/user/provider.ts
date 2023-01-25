import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { postChangeMyPassword } from './actions';
import { errorFactory } from './errors';

class UserProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public postChangeMyPassword = this.withFetcher(postChangeMyPassword);
}

export { UserProvider };
