import { SherlClient } from '../common';
import { ContactProvider } from './provider';
import { ContactInputDto } from './types';

const contact = (client: SherlClient) => new ContactProvider(client);
export { contact, ContactInputDto };
