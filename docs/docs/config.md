---
id: config
title: Config
---

## Usage

the config domain will be used to store any data with a couple key/value

## Set your config couple

<span class="badge badge--warning">Require authentication</span>

```ts
config(client).setConfig(data: ISetConfig);
```

```ts
interface ISetConfig {
  isPublic: boolean;
  code: string;
  value: any;
  appliedTo?: string;
}
```

appliedTo  = you can assign your config to a specific user or organisation (if not set, your config will be a generic config)

This call returns an object of [IConfig](config-types)

## Get your public config

<span class="badge badge--success">Public</span>

```ts
config(client).getPublicConfig(key: string);
```

This function retrieve the config value for the given key, but only if you set your config as <b>public</b>.

This call returns [IPublicConfig](config-types)