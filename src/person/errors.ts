import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  NOT_FOUND = 'person/not-found',

  // PUT ADDRESS
  PUT_ADDRESS_FAILED = 'person/put-address-failed',
  PUT_ADDRESS_FORBIDDEN = 'person/put-address-failed',
  PUT_ADDRESS_NOT_FOUND = 'person/put-address-failed',

  // FETCH
  FETCH_FAILED = 'person/fetch-failed',
  FETCH_FORBIDDEN = 'person/fetch-failed',
  FETCH_NOT_FOUND = 'person/fetch-failed',
  FETCH_ALREADY_EXISTS = 'person/fetch-failed',

  // PUT
  PUT_FAILED = 'person/put-person-failed',
  PUT_FORBIDDEN = 'person/put-person-forbidden',
  PUT_NOT_FOUND = 'person/put-person-not-found',

  // POST
  POST_FAILED = 'person/post-person-failed',
  POST_FORBIDDEN = 'person/post-person-forbidden',
  POST_NOT_FOUND = 'person/post-person-not-found',
  POST_ALREADY_EXISTS = 'person/post-person-already-exists',

  // CREATE PERSON
  CREATE_PERSON_FAILED = 'person/create-person-failed',
  CREATE_PERSON_FORBIDDEN = 'person/create-person-forbidden',
  CREATE_PERSON_ALREADY_EXISTS = 'person/create-person-already-exists',

  // CREATE ADDRESS
  CREATE_ADDRESS_FAILED = 'person/create-address-failed',
  CREATE_ADDRESS_FORBIDDEN = 'person/create-address-forbidden',
  CREATE_ADDRESS_ALREADY_EXISTS = 'person/create-address-already-exists',

  // DELETE ADDRESS
  DELETE_ADDRESS_FAILED = 'person/delete-address-failed',
  DELETE_ADDRESS_FORBIDDEN = 'person/delete-address-forbidden',
  DELETE_ADDRESS_NOT_FOUND = 'person/delete-address-not-found',

  // ADD PICTURE
  ADD_PICTURE_FAILED = 'person/post-picture-failed',
  ADD_PICTURE_FORBIDDEN = 'person/post-picture-forbidden',
}

export const errors = {
  // FETCH
  [PersonErr.FETCH_FAILED]: 'Failed to fetch person API',
  [PersonErr.NOT_FOUND]: 'Person not found',

  // POST
  [PersonErr.POST_FAILED]: 'Failed to create person',

  // PUT
  [PersonErr.PUT_FAILED]: 'Failed to update person',

  // CREATE PERSON
  [PersonErr.CREATE_PERSON_FAILED]: 'Failed to create new person',
  [PersonErr.CREATE_PERSON_FORBIDDEN]:
    'Failed to create new person. Forbidden access',
  [PersonErr.CREATE_PERSON_ALREADY_EXISTS]:
    'Failed to create new person. Person already exists',

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
  [PersonErr.PUT_ADDRESS_FAILED]: 'Failed to update address',

  // DELETE ADDRESS
  [PersonErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
  [PersonErr.DELETE_ADDRESS_FORBIDDEN]:
    'Failed to delete address. Forbidden access',
  [PersonErr.DELETE_ADDRESS_NOT_FOUND]:
    'Failed to delete address. Address not found',
};

export const errorFactory = new ErrorFactory<PersonErr>('Person', errors);
