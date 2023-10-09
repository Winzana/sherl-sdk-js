import { IProfile, IRole } from '../iam';
import { IPerson, PersonTypeEnum } from '../person';

export interface IUpdatePasswordDto {
  oldPassword: string;
  password: string;
  passwordRepeat: string;
}

export interface IResetPasswordRequestDto {
  email: string;
}
export interface IResetPasswordDto {
  token: string;
  password: string;
  passwordRepeat: string;
}

export interface IUser {
  id: string;
  uri?: string;
  consumerId?: string;
  organizationId?: string;
  email?: string;
  mobilePhoneNumber?: string;
  code?: {
    generatedAt?: any;
    value?: string;
  };
  password?: string;
  enabled?: boolean;
  deleted?: boolean;
  type?: PersonTypeEnum;
  profileUri?: string;
  profile?: IProfile;
  profilesUri?: string[];
  profiles?: IProfile[];
  rolesUri?: string[];
  frozenRoles?: IRole[];
  roles?: IRole[];
  tokens?: {
    facebook?: string;
    google?: string;
    twitter?: string;
  };
  lastLoginAt: any;
  createdAt: any;
  updatedAt?: any;
  // calculated properties (not persisted)
  person?: IPerson;
}
