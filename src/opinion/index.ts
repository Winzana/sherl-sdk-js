import { SherlClient } from '../common';
import { OpinionProvider } from './provider';

export const opinion = (client: SherlClient) => new OpinionProvider(client);
