import { SherlClient } from '../common';
import { SearchProvider } from './provider';

export const search = (client: SherlClient) => new SearchProvider(client);
export * as SearchTypes from './types';
