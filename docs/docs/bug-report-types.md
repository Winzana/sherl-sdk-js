---
id: bug-report-types
title: Bug report types
---

## IBugReport

```ts
interface IBugReport {
  id: string;
  osName: string;
  browserName: string;
  windowHeight: number;
  windowWidth: number;
  contactEmail: string;
  message: string;
  uri: string;
  consumerId: string;
  createdAt: string;
}
```