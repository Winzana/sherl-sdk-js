---
id: config
title: Config
---

## Usage
the config domain will be used to store any data with a couple key/value

## Set your config couple
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
appliedTo  = you can assigned your config to a specific user or organisation (if not set, your config will be a generic config)

## Get your public config
```ts
config(client).getPublicConfig(KEY);
```
This function retrieve the config value for the given key, but only if you set your config as <b>public</b>.
The returning data look like this interface :
```ts
interface IGetPublicConfigResponse {
  code: string;
  value: any;
}
```