export interface IOpeningHoursSpecification {
  id: string;
  dayOfWeek: string;
  closes: Date;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
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
