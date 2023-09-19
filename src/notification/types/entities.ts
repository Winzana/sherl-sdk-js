export interface INotificationRegistrationResponse {
  personId: string;
  consumerId: string;
  registrationToken: string;
  createdAt: string;
}

export interface INotificationRegistration {
  token: string;
}

export interface INotificationToOrganization {
  organizationUri: string;
  type: string;
}
export interface NotificationUpdateInputDto {
  enabled: boolean;
  contentEmail: string;
  contentSMS: string;
}
//TODO : complete interface
export interface INotification {
  id: string;
}
