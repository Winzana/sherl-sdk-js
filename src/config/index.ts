import { SherlClient } from '../common';
import { ConfigProvider } from './provider';

export const config = (client: SherlClient) => new ConfigProvider(client);
