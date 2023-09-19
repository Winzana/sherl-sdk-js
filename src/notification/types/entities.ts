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
//TODO COMPLETE WITH THE OTHER PROPS
export interface IUpdateNotification {
  enabled: boolean;
}
//TODO : complete interface
export interface INotification {
  id: string;
}