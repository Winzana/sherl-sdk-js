import { SherlClient } from '../common';
import { PlaceProvider } from './provider';

export const place = (client: SherlClient) => new PlaceProvider(client);
