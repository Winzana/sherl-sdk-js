import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getConfigs,
  getCurrentAddress,
  getMe,
  getPersonById,
  getPersons,
  updatePersonById,
  createPerson,
  registerWithEmailAndPassword,
} from './actions';
import { errorFactory } from './errors';
import { addPersonPicture } from "./actions/add-person-picture.action";

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
  public createPerson = this.withFetcher(createPerson);
  public registerWithEmailAndPassword = this.withFetcher(
    registerWithEmailAndPassword,
  );
  public addPersonPicture = this.withFetcher(addPersonPicture);
}

export { PersonProvider };
