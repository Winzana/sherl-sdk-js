import { SherlClient } from '../common';
import { CmsProvider } from './provider';
export * as CmsTypes from './types';

export const cms = (client: SherlClient) => new CmsProvider(client);
