---
id: notification
title: Notification
---

## Registration

<span class="badge badge--warning">Require authentication</span>

Allows you to registrate to notification

```ts
const notifications = await Sherl.notification.notificationRegistration({
    token: 'string';
});
```

The return data look like this interface :

```ts
export interface INotificationRegistrationResponse {
  personId: string;
  consumerId: string;
  registrationToken: string;
  createdAt: string;
}
```

## Get Notifications

<span class="badge badge--warning">Require authentication</span>

Retrieve notifications with some tags

```ts
const notifications = await Sherl.notification.getNotifications(1, 10, {
  /* Filters */
});
```

Return a paginated array of Notification.

## Enable Notifications on Organization

<span class="badge badge--warning">Require authentication</span>

Enables a type of notification to be activated for an organisation

```ts
const notifications = await Sherl.notification.enableToOrganization('id', {
  type: 'string',
  organizationUri: 'string',
});
```

Return any

## Disable Notifications on Organization

<span class="badge badge--warning">Require authentication</span>

Allows you to deactivate a type of notification for an organisation

```ts
const notifications = await Sherl.notification.disableToOrganization('id', {
  type: 'string',
  organizationUri: 'string',
});
```

Return any

## Update Notification 

<span class="badge badge--warning">Require authentication</span>

Allows you to update a notification

```ts
const notifications = await Sherl.notification.updateNotification('id', {
  enabled: true,
});
```

Return any