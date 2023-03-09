import { Sort } from '../../common';
import { IPerson } from './types';

export interface PersonParams {
  id?: string;
  userId?: string;
  q?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  mobilePhoneNumber?: string;
  faxNumber?: string;
  nationality?: string;
  uri?: string;
  legalName?: string;
  location?: any;
  subOrganizations?: any;
  birthdate?: string;
  email?: string;
  gender?: string;
  jobTitle?: string;
  enabled?: boolean;
  createdAt?: string;
  updatedAt?: string;
  analytics?: string;
  noFrequentedEstablishment?: string;
  sort?: Sort<IPerson>;
}
