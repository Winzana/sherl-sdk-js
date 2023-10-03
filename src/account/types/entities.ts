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
  location: Omit<IAddress, 'id' | 'createdAt'>;
  password: number;
  passwordRepeat: number;
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
  location: Omit<IAddress, 'id' | 'createdAt'>;
  createdAt: Date;
  updatedAt: Date;
}
