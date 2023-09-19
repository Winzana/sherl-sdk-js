---
id: notification
title: Notification
---

## Registration

<span class="badge badge--warning">Require authentication</span>

Allows you to registrate to notification

```ts
const notifications = await Sherl.notification(client).notificationRegistration(data: NotificationRegistrationTokenInputDto);
```

```ts
interface NotificationRegistrationTokenInputDto {
  token: string;
}
```

This call returns an object of [NotificationDevice](notification-types#notificationdevice)

## Get Notifications

<span class="badge badge--warning">Require authentication</span>

Retrieve notifications with some tags

```ts
const notifications = await Sherl.notification(client).getNotifications(filters: INotificationFilters);
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

This call returns a [paginated](pagination) array of [notifications](notification-types#notificationdevice).

## Enable Notifications on Organization
<span class="badge badge--warning">Require authentication</span>

Enables a type of notification to be activated for an organization

```ts
const notifications = await Sherl.notification(client).enableToOrganization(data: NotificationEnableToOrganizationInputDto, id: string);
```

```ts
interface NotificationEnableToOrganizationInputDto {
  organizationUri: string
} 
```

This call returns a [string](notification-types#notification-enabled-on-the-organization) according to successfully. 

## Disable Notifications on Organization

<span class="badge badge--warning">Require authentication</span>

Allows you to deactivate a type of notification for an organisation

```ts
const notifications = await Sherl.notification(client).disableToOrganization(data: NotificationDisableToOrganizationInputDto, id: string);
```

```ts
interface NotificationDisableToOrganizationInputDto {
  organizationUri: string
} 
```

This call returns a [string](notification-types#notification-disabled-on-the-organization) according to successfully. 

## Update Notification 

<span class="badge badge--warning">Require authentication</span>

Allows you to update a notification

```ts
const notifications = await Sherl.notification(client).updateNotification(data: NotificationUpdateInputDto, id: string);
```

```ts
interface NotificationUpdateInputDto {
  enabled: boolean;
  contentEmail: string;
  contentSMS: string;
}
```

This call returns an [notification](notification-types) object