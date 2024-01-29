import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  ADDRESS_NOT_FOUND = 'person/address-not-found',

  // UPDATE ADDRESS
  UPDATE_ADDRESS_FAILED = 'person/update-address-failed',
  UPDATE_ADDRESS_FORBIDDEN = 'person/update-address-forbidden',

  // FETCH
  GET_ONE_BY_USERID_FAILED = 'person/fetch-failed',
  GET_ONE_BY_USERID_FORBIDDEN = 'person/fetch-forbiden',
  FETCH_PERSONS_FORBIDDEN = 'person/fetch-persons-forbidden',
  FETCH_PERSONS_FAILED = 'person/fetch-persons-failed',
  FETCH_POSITION_FORBIDDEN = 'person/fetch-position-forbidden',
  FETCH_POSITION_FAILED = 'person/fetch-position-failed',

  // GET CONFIGS
  GET_CONFIGS_FAILED = 'person/get-configs-failed',
  GET_CONFIGS_FORBIDDEN = 'person/get-configs-forbidden',

  // GET ME
  GET_ME_FAILED = 'person/get-me-failed',
  GET_ME_FORBIDDEN = 'person/get-me-forbidden',

  // UPDATE PERSON BY ID
  UPDATE_PERSON_BY_ID_FAILED = 'person/update-person-by-id-failed',
  UPDATE_PERSON_BY_ID_FORBIDDEN = 'person/update-person-by-id-forbidden',
  PERSON_NOT_FOUND = 'person/person-not-found',

  // CREATE PERSON
  CREATE_PERSON_FAILED = 'person/create-person-failed',
  CREATE_PERSON_FORBIDDEN = 'person/create-person-forbidden',
  CREATE_PERSON_ALREADY_EXISTS = 'person/create-person-already-exists',

  // REGISTER WITH EMAIL AND PASSWORD
  PERSON_ALREADY_EXISTS = 'person/register-with-email-and-password-already-exists',
  REGISTER_PERSON_FAILED = 'person/register-person-failed',
  REGISTER_PERSON_FORBIDDEN = 'person/register-person-forbidden',

  // CREATE ADDRESS
  CREATE_ADDRESS_FAILED = 'person/create-address-failed',
  CREATE_ADDRESS_FORBIDDEN = 'person/create-address-forbidden',
  CREATE_ADDRESS_ALREADY_EXISTS = 'person/create-address-already-exists',

  // DELETE ADDRESS
  DELETE_ADDRESS_FAILED = 'person/delete-address-failed',
  DELETE_ADDRESS_FORBIDDEN = 'person/delete-address-forbidden',

  // ADD PICTURE
  ADD_PICTURE_FAILED = 'person/post-picture-failed',
  ADD_PICTURE_FORBIDDEN = 'person/post-picture-forbidden',
}

export const errors = {
  // FETCH
  [PersonErr.GET_ONE_BY_USERID_FAILED]: 'Failed to fetch person API',
  [PersonErr.GET_ONE_BY_USERID_FORBIDDEN]:
    'Failed to fetch person API, access denied',
  [PersonErr.ADDRESS_NOT_FOUND]: 'Failed to reach API. Address not found',
  [PersonErr.FETCH_PERSONS_FORBIDDEN]:
    'Failed to fetch persons. Forbidden access',
  [PersonErr.FETCH_PERSONS_FAILED]: 'Failed to fetch persons',
  [PersonErr.FETCH_POSITION_FORBIDDEN]:
    'Failed to fetch position. Forbidden access',
  [PersonErr.FETCH_POSITION_FAILED]: 'Failed to fetch position',

  // UPDATE PERSON BY ID
  [PersonErr.UPDATE_PERSON_BY_ID_FAILED]: 'Failed to update person',
  [PersonErr.UPDATE_PERSON_BY_ID_FORBIDDEN]:
    'Failed to update person. Forbidden access',
  [PersonErr.PERSON_NOT_FOUND]: 'Failed to fecth API. Person not found',

  // GET CONFIGS
  [PersonErr.GET_CONFIGS_FAILED]: 'Failed to get configs',
  [PersonErr.GET_CONFIGS_FORBIDDEN]: 'Failed to get configs. Forbidden access',

  // GET ME
  [PersonErr.GET_ME_FAILED]: 'Failed to get current user',
  [PersonErr.GET_ME_FORBIDDEN]: 'Failed to get current user. Forbidden access',

  // CREATE PERSON
  [PersonErr.CREATE_PERSON_FAILED]: 'Failed to create new person',
  [PersonErr.CREATE_PERSON_FORBIDDEN]:
    'Failed to create new person. Forbidden access',
  [PersonErr.CREATE_PERSON_ALREADY_EXISTS]:
    'Failed to create new person. Person already exists',

  // REGISTER WITH EMAIL AND PASSWORD
  [PersonErr.PERSON_ALREADY_EXISTS]:
    'Failed to register. Person already exists',
  [PersonErr.REGISTER_PERSON_FAILED]: 'Failed to register person',
  [PersonErr.REGISTER_PERSON_FORBIDDEN]:
    'Failed to register person. Forbidden access',

  // ADD PICTURE
  [PersonErr.ADD_PICTURE_FAILED]: 'Failed to add picture to person profile',
  [PersonErr.ADD_PICTURE_FORBIDDEN]:
    'Failed to add picture to person profile, access denied',

  // CREATE ADDRESS
  [PersonErr.CREATE_ADDRESS_FAILED]: 'Failed to create new address',
  [PersonErr.CREATE_ADDRESS_FORBIDDEN]:
    'Failed to create new address. Forbidden access',
  [PersonErr.CREATE_ADDRESS_ALREADY_EXISTS]:
    'Failed to create new address. Address already exists',

  // UPDATE ADDRESS
  [PersonErr.UPDATE_ADDRESS_FAILED]: 'Failed to update address',
  [PersonErr.UPDATE_ADDRESS_FORBIDDEN]:
    'Failed to update address. Forbidden access',

  // DELETE ADDRESS
  [PersonErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
  [PersonErr.DELETE_ADDRESS_FORBIDDEN]:
    'Failed to delete address. Forbidden access',
};

export const errorFactory = new ErrorFactory<PersonErr>('Person', errors);
