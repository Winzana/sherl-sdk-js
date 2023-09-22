export interface INotificationRegistrationResponse {
  personId: string;
  consumerId: string;
  registrationToken: string;
  createdAt: string;
}

export interface INotificationRegistration {
  token: string;
}

export interface INotificationUpdateAvailabilityInput {
  organizationUri: string;
  type: string;
}

export interface INotificationUpdateDto {
  contentEmail: string;
  contentSMS: string;
  enabled: boolean;
}

export interface INotification {
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  code: NotificationEnum;
  email: IEmail;
  sms: ISMS;
  push: IPush;
  isActivatable: boolean;
  enabled: boolean;
  conditions?: { [key: string]: any };
  createdAt: any;
  updatedAt: any;
}

export interface IEmail {
  fr: IEmailContent;
  en: IEmailContent;
}

export interface IEmailContent {
  subject: string;
  text: string;
  html: string;
}

export interface ISMS {
  fr: ISMSContent;
  en: ISMSContent;
}

export interface ISMSContent {
  text: string;
}

export interface IPush {
  fr: IPushContent;
  en: IPushContent;
  data?: { [key: string]: any };
}

export interface IPushContent {
  title: string;
  text: string;
}

export enum NotificationEnum {
  CONTACT = 'contact',
  PERSON_REGISTER = 'person:register',
  FOUNDER_REGISTER = 'founder:register',
  EMPLOYEE_REGISTER = 'employee:register',
  TEST_NOTIFICATION = 'notification:test',
  AUTH_SMS_REQUEST = 'auth:sms-request',
  USER_PASSWORD_FORGOT_REQUEST = 'user:password:forgot-request',
  USER_REGISTERED = 'user:registered',
  CLAIM_CREATED = 'claim:created',
  CLAIM_REPLY = 'claim:reply',
  CLAIM_REFUND = 'claim:refund',
  OPINION_CREATE = 'opinion:create',
  OPINION_CLAIM = 'opinion:claim',
  OPINION_PROPOSITION_TO_CREATE = 'opinion:proposition-to-create',
  SHOP_ORDER_NEW = 'shop:order:new',
  SHOP_ORDER_STATUS_CHANGED_FINISHED_TO_REFUND = 'shop:order:status:changed:finished-to-refund',
  SHOP_ORDER_STATUS_CHANGED_ORDER_ACCEPTED_TO_ORDER_IN_PROGRESS = 'shop:order:status:changed:order-accepted-to-order-in-progress',
  SHOP_ORDER_STATUS_CHANGED_ORDER_IN_PROGRESS_TO_ORDER_READY = 'shop:order:status:changed:order-in-progress-to-order-ready',
  SHOP_ORDER_STATUS_CHANGED_ORDER_READY_TO_FINISHED = 'shop:order:status:changed:order-ready-to-finished',
  SHOP_ORDER_STATUS_CHANGED_ORDER_WAITING_VALIDATION_TO_ORDER_REFUSED = 'shop:order:status:changed:waiting-validation-to-order-refused',
  SHOP_ORDER_STATUS_CHANGED_PAYED_TO_FINISHED = 'shop:order:status:changed:payed-to-finished',
  SHOP_ORDER_STATUS_CHANGED_TO_PAYMENT_REFUSED = 'shop:order:status:basket-validated-to-payment-refused',
  SHOP_ORDER_STATUS_CHANGED_TO_ORGANIZATION_CANCELLED = 'shop:order:order-in-progress-to-organization-cancelled',
}
