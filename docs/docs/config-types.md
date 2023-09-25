---
id: config-types
title: Config types
---

## IConfig
```ts
interface IConfig {
  id: string;
  code: string;
  value: any;
  consumer: string;
  position: number;
  appliedTo?: string;
  isPublic?: boolean;
}
```