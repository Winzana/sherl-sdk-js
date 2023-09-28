---
id: person-config
title: Config
---

This page list all actions of person's config.

## Get person configuration

<span class="badge badge--warning">Require authentication</span>

Retrieve person configuration vars.

```ts
await person(client).getConfigs();
```

This call returns an array of [IConfig](../config-types#iconfig) objects.
