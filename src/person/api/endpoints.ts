export const endpoints = {
  GET_ME: '/api/persons/me',
  GET_ONE_BY_USERID: '/api/persons/:id',
  GET_POSITION: '/api/persons/current-address',
  GET_PERSONS: '/api/persons',
  GET_CONFIG: '/api/persons/config',
  UPDATE_PERSON_BY_ID: '/api/persons/:id',
  CREATE_PERSON: '/api/persons',
  REGISTER_WITH_EMAIL_AND_PASSWORD:
    '/api/persons/register-with-email-and-password',
  ADD_PERSON_PICTURE: '/api/persons/:userId/picture/create/:mediaId',
  CREATE_ADDRESS: '/api/persons/addresses',
  UPDATE_ADDRESS: '/api/persons/addresses/:id',
  DELETE_ADDRESS: '/api/persons/addresses/:id',
};
