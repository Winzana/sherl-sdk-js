---
id: communication-types
title: Communication types
---

## ICommunication

```ts
interface ICommunication {
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
```

## Communication enumerations

```ts
enum CommunicationTypeEnum {
  MESSAGING = 'MESSAGING',
  TRANSACTIONAL = 'TRANSACTIONAL',
}

enum CommunicationChannelEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WHATSAPP = 'WHATSAPP',
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  TELEGRAM = 'TELEGRAM',
}
```