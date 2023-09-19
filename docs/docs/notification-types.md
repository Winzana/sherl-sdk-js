---
id: notification-types
title: Notification types
---

### NotificationDevice

```ts
consumerId: string;
personId: string;
registrationToken: string;
createdAt?: Date;
updatedAt?: Date;
```

### Notification disabled on the organization

```ts
HTTP.OK (200) : "Successful disable notification to organization"
HTTP.NOT_FOUND (404) : "Notification not exist"
```

### Notification enabled on the organization

```ts
HTTP.OK (200) : "Successful enable notification to organization"
HTTP.NOT_FOUND (404) : "Notification not exist"
```