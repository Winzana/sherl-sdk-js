import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  updateMyPassword,
  resetPasswordRequest,
  resetPasswordValidate,
} from './actions';
import { errorFactory } from './errors';

class UserProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public updateMyPassword = this.withFetcher(updateMyPassword);
  public resetPasswordRequest = this.withFetcher(resetPasswordRequest);
  public resetPasswordValidate = this.withFetcher(resetPasswordValidate);
}

export { UserProvider };
