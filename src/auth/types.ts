export interface ILoginResponse {
  access_token: string;
}

export interface ISignInWithEmailAndPasswordRequest {
  email: string;
  password: string;
}

export interface IAuthExternalServiceUserInfo {
  displayName: string;
  emails: [{ value: string; verified: boolean }];
  id: string;
  locale: string;
  name: { familyName: string; givenName: string };
  photos: [
    {
      value: string;
    },
  ];
}
