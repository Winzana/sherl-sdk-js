import { SherlClient } from '../common';
import { ContactProvider } from './provider';
import { IContactBody } from './types';

const contact = (client: SherlClient) => new ContactProvider(client);
export { contact, IContactBody };
