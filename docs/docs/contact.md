---
id: contact
title: Contact
---

## Contact

Send contact

```ts
const contact = await Sherl.contact.sendContact({
    name: 'string',
    email: 'string',
    message: 'string';
});
```

Return boolean

## Contact person

<span class="badge badge--warning">Require authentication</span>

Send contact to person

```ts
const contact = await Sherl.contact.contactPerson('id', {
    name: 'string',
    email: 'string',
    message: 'string';
});
```

Return boolean
