import { SherlClient } from '../common';
import { CommunicationProvider } from './provider';
import {
  CommunicationChannelEnum,
  CommunicationTypeEnum,
  ICommunicationFindByInputDto,
} from './types';

export const communication = (client: SherlClient) =>
  new CommunicationProvider(client);
export {
  CommunicationChannelEnum,
  CommunicationTypeEnum,
  ICommunicationFindByInputDto,
};
