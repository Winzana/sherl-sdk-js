import { SherlClient } from '../common';
import { IamProvider } from './provider';
import { IProfile, IRole, IIamProfilesFilters } from './types';

const iam = (client: SherlClient) => new IamProvider(client);
export { iam, IProfile, IRole, IIamProfilesFilters };
