---
id: contact
title: Contact
---

## Contact

Send contact

```ts
const contact = await contact(client).sendContact(body: ContactInputDto);
```

```ts
interface ContactInputDto {
  name: string;
  email: string;
  message: string
}
```

This call returns string with 'Ok'.

## Contact person

<span class="badge badge--warning">Require authentication</span>

Send contact to person

```ts
const contact = await contact(client).contactPerson(body: ContactInputDto, id: string);
```

This call returns string with 'Ok'.
