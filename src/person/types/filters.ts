import { Sort } from '../../common';
import { IPerson, PersonTypeEnum } from './entities';

export interface IPersonFilters {
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
  type?: PersonTypeEnum;
  sort?: Sort<IPerson>;
}
