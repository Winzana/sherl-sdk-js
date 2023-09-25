import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getAllIamProfiles,
  getIamProfileById,
  getIamRoleById,
} from './actions';
import { errorFactory } from './errors';

class IamProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getAllIamProfiles = this.withFetcher(getAllIamProfiles);
  public getIamProfileById = this.withFetcher(getIamProfileById);
  public getIamRoleById = this.withFetcher(getIamRoleById);
}

export { IamProvider };
