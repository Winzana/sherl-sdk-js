---
id: picture
title: Person picture
---

## Add picture to person profile

<span class="badge badge--warning">Require authentication</span>

```ts
await person(client).addPersonPicture(picture: IPictureRegister)
```

```ts
interface IPictureRegister {
  person: string;
  mediaId: string;
  file: File;
}
```

This call returns an [IPerson](../person-types#iperson) object.