import { SherlClient } from '../common';
import { PersonProvider } from './provider';
import { IPerson, IPersonFilters } from './types';

const person = (client: SherlClient) => new PersonProvider(client);
export { person, IPerson, IPersonFilters };
