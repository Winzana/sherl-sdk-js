import { SherlClient } from '../common';
import { IamProvider } from './provider';
import {
  IGetAllIamProfiles,
  IGetOneIamProfile,
  IIamProfilesFilters,
  IIamRole,
} from './types';

const iam = (client: SherlClient) => new IamProvider(client);
export {
  iam,
  IGetAllIamProfiles,
  IGetOneIamProfile,
  IIamProfilesFilters,
  IIamRole,
};
