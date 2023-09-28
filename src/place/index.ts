import { SherlClient } from '../common';
import { PlaceProvider } from './provider';
import { IAddress, IGeoCoordinates, IPlace } from './types';

export const place = (client: SherlClient) => new PlaceProvider(client);
export { IAddress, IGeoCoordinates, IPlace };
