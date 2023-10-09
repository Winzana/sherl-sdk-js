import { SherlClient } from '../common';
import { EtlProvider } from './provider';

export const etl = (client: SherlClient) => new EtlProvider(client);
export * from './types';
