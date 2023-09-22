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
