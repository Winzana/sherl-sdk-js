---
id: config
title: Config
---

## Usage

the config domain will be used to store any data with a couple key/value

## Set your config couple

<span class="badge badge--warning">Require authentication</span>

```ts
config(client).setConfig({yourdata});
```

'yourdata' is an object with those interface

```ts
interface ISetConfig {
  isPublic: boolean;
  code: string;
  value: any;
  appliedTo?: string;
}
```

appliedTo  = you can assign your config to a specific user or organisation (if not set, your config will be a generic config)

## Get your public config

<span class="badge badge--success">Public</span>

```ts
config(client).getPublicConfig(KEY);
```

This function retrieve the config value for the given key, but only if you set your config as <b>public</b>.
The returned data looks like this interface :

```ts
interface IGetPublicConfigResponse {
  code: string;
  value: any;
}
```