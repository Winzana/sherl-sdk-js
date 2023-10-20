---
id: notification
title: Notification
---

## Registration

<span class="badge badge--warning">Require authentication</span>

Allows you to registrate to notification

```ts
await notification(client).notificationRegistration(data: NotificationRegistrationTokenInputDto);
```

```ts
interface NotificationRegistrationTokenInputDto {
  token: string;
}
```

This call returns an object of [INotificationRegistrationResponse](notification-types#inotificationregistrationresponse)

## Get notifications

<span class="badge badge--warning">Require authentication</span>

Retrieve notifications with some tags

```ts
await notification(client).getNotifications(filters: INotificationFilters);
```

```ts
interface INotificationFilters {
  sms?: number;
  email?: number;
  page?: number;
  itemsPerPage?: number;
  uri?:string;
  id?:string
}
```

This call returns an [ISearchResult](pagination#isearchresult) of [INotification](notification-types#inotification) object.

## Enable notifications on organization

<span class="badge badge--warning">Require authentication</span>

Enables a type of notification to be activated for an organization

```ts
await notification(client).enableToOrganization(data: INotificationUpdateAvailabilityInput, id: string);
```

```ts
interface INotificationUpdateAvailabilityInput {
  organizationUri: string;
  type: string;
} 
```

This call returns an [INotification](notification-types#inotification) object.

## Disable notifications on organization

<span class="badge badge--warning">Require authentication</span>

Allows you to deactivate notifications for an organization

```ts
await notification(client).disableToOrganization(data: INotificationUpdateAvailabilityInput, id: string);
```

This call returns an [INotification](notification-types#inotification) object.

## Update notification 

<span class="badge badge--warning">Require authentication</span>

Allows you to update a notification

```ts
await notification(client).updateNotification(id: string, data: INotificationUpdateDto);
```

```ts
interface INotificationUpdateDto {
  enabled: boolean;
  contentEmail: string;
  contentSMS: string;
}
```

This call returns an [INotification](notification-types#inotification) object.

## Send notification by type

<span class="badge badge--warning">Require authentication</span>

```ts
await notification(client).sendNotificationByType(type: NotificationTypeEnum, notificationInfo: SendNotificationInput);
```

```ts
enum NotificationTypeEnum {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
}

interface SendNotificationInput {
  html: string;
  text: string;
  subject: string;
}
```

This call returns a boolean according to successfully of notification sending. 