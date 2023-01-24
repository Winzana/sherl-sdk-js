import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getConfigs,
  getCurrentAddress,
  getMe,
  getPersonById,
  getPersons,
  updatePersonById as updatePersonById,
} from './actions';
import { errorFactory } from './errors';

class PersonProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getConfigs = this.withFetcher(getConfigs);
  public getMe = this.withFetcher(getMe);
  public getPersonById = this.withFetcher(getPersonById);
  public getPersons = this.withFetcher(getPersons);
  public getCurrentAddress = this.withFetcher(getCurrentAddress);
  public updatePersonById = this.withFetcher(updatePersonById);
}

export { PersonProvider };
