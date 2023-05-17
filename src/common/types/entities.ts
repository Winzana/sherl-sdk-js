export interface IPlace {
  id: string;
  uri: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  types: string[];
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  originId: string;
  latitude: number;
  longitude: number;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  isDefault: boolean;
}

export interface IAddress {
  id: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  types: string[];
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  type: string;
  isDefault: boolean;
  googleToken: string;
  uri: string;
}

export interface IGeoCoordinates extends IAddress {
  latitude: number;
  longitude: number;
}
