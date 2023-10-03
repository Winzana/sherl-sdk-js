export interface IAddressDto {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  uri?: string;
  createdAt?: Date;
  department?: string;
  complementaryStreetAddress?: string;
  name?: string;
  originId?: string;
  latitude?: number;
  longitude?: number;
}

export interface AccountCreateInputDto {
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
  location: IAddressDto;
  createdAt: Date;
  updatedAt: Date;
}
