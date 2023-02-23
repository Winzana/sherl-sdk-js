---
id: configuration
title: Configuration
---

Before calling any other methods, you need to initialize the SDK by calling `init`:

```ts
// With require
const Sherl = require('@sherl/sdk');
// OR import
import * as Sherl from '@sherl/sdk';

const client = Sherl.init({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});
```
