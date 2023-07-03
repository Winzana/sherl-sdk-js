export interface ApiLoginResponse {
  access_token: string;
}

export interface SignInWithGoogleRequest {
  id: number;
  emails: [
    {
      value: string;
      verified: boolean;
    },
  ];
  photos: [
    {
      value: string;
    },
  ];
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  locale: string;
}
