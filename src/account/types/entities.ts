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
  location: IAccountLocation;
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
  location: IAccountLocation;
  createdAt: Date;
  updatedAt: Date;
}

type IAccountLocation = Omit<IAddress, 'id' | 'createdAt'>;
