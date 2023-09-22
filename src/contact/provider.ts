import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { contactPerson, sendContact } from './actions';
import { errorFactory } from './errors';

class ContactProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public sendContact = this.withFetcher(sendContact);
  public contactPerson = this.withFetcher(contactPerson);
}

export { ContactProvider };
