import { SherlClient } from '../common';
import { QuotaProvider } from './provider';

export const quotas = (client: SherlClient) => new QuotaProvider(client);
export * as QuotaTypes from './types';
