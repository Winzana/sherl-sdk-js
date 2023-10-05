export interface ILocation {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: string;
  longitude: string;
}

export interface IGeoPoint {
  latitude: number;
  longitude: number;
}
