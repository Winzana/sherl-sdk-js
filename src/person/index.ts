import { SherlClient } from '../common';
import { PersonProvider } from './provider';
import { IPerson, IPersonFilters, IOpeningHoursSpecification, IImageObject } from './types';

const person = (client: SherlClient) => new PersonProvider(client);
export { person, IPerson, IPersonFilters, IOpeningHoursSpecification, IImageObject };
