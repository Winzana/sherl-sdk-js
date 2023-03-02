import {
  CommunicationTypeEnum,
  CommunicationChannelEnum,
} from '../organization/types';

export interface ICommunicationFindByInputDto {
  id?: string;
  uri?: string;
  consumerId?: string;
  senderUri?: string;
  receiverUri?: string;
  aboutUri?: string;
  channel?: CommunicationChannelEnum;
  type?: CommunicationTypeEnum;
}
