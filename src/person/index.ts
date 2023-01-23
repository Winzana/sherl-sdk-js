import { SherlClient } from '../common';
import { PersonProvider } from './provider';

export const person = (client: SherlClient) => new PersonProvider(client);
