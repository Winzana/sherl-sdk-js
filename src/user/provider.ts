import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { updateMyPassword, resetPassword } from './actions';
import { errorFactory } from './errors';

class UserProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public updateMyPassword = this.withFetcher(updateMyPassword);
  public resetPassword = this.withFetcher(resetPassword);
}

export { UserProvider };
