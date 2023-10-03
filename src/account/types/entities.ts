import { IAddress } from '../../place';

export interface IAccountCreateInputDto {
  hosts: string[];
  ips?: string[];
  firstName: string;
  lastName: string;
  email: string;
  mobilePhoneNumber: string;
  birthDate: Date;
  gender: string;
  legalName: string;
  location: IAddressDto;
  password: number;
  passwordRepeat: number;
}

export interface IAddressDto extends IAddress {
  originId?: string;
  latitude?: number;
  longitude?: number;
}

export interface IAccount {
  id: string;
  uri: string;
  projects: string[];
  firstName: string;
  lastName: string;
  email: string;
  mobilePhoneNumber: string;
  birthDate: Date;
  gender: string;
  legalName: string;
  location: IAddress;
  createdAt: Date;
  updatedAt: Date;
}
