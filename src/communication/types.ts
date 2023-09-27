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

export interface ICommunication {
  id: string;
  uri: string;
  consumerId: string;
  title: string;
  content: string;
  senderUri: string;
  receiverUri?: string;
  channel: CommunicationChannelEnum;
  type: CommunicationTypeEnum;
  code?: string;
  createdAt: Date;
}

export enum CommunicationTypeEnum {
  MESSAGING = 'MESSAGING',
  TRANSACTIONAL = 'TRANSACTIONAL',
}

export enum CommunicationChannelEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WHATSAPP = 'WHATSAPP',
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  TELEGRAM = 'TELEGRAM',
}
