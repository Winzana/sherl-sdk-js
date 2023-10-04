import { SherlClient } from '../common';
import { ShopProvider } from './provider';

export const shop = (client: SherlClient) => new ShopProvider(client);
export * as ShopTypes from './types';
