import { SherlClient } from '../common';
import { AuthProvider } from './provider';

export const auth = (client: SherlClient) => new AuthProvider(client);

export * as AuthTypes from './types';
