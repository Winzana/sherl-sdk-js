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
  PUT_ALREADY_EXISTS = 'person/put-person-already-exists',

  // POST
  POST_FAILED = 'person/post-person-failed',
  POST_FORBIDDEN = 'person/post-person-forbidden',
  POST_NOT_FOUND = 'person/post-person-not-found',
  POST_ALREADY_EXISTS = 'person/post-person-already-exists',

  // CREATE PERSON
  CREATE_PERSON_FAILED = 'person/create-person-failed',
  CREATE_PERSON_FORBIDDEN = 'person/create-person-forbidden',
  CREATE_PERSON_NOT_FOUND = 'person/create-person-not-found',
  CREATE_PERSON_ALREADY_EXISTS = 'person/create-person-already-exists',

  // CREATE ADDRESS
  CREATE_ADDRESS_FAILED = 'person/create-address-failed',
  CREATE_ADDRESS_FORBIDDEN = 'person/create-address-forbidden',
  CREATE_ADDRESS_NOT_FOUND = 'person/create-address-not-found',
  CREATE_ADDRESS_ALREADY_EXISTS = 'person/create-address-already-exists',

  // DELETE ADDRESS
  DELETE_ADDRESS_FAILED = 'person/delete-address-failed',
  DELETE_ADDRESS_FORBIDDEN = 'person/delete-address-forbidden',
  DELETE_ADDRESS_NOT_FOUND = 'person/delete-address-not-found',

  // ADD PICTURE
  ADD_PICTURE_FAILED = 'person/post-picture-failed',
  ADD_PICTURE_FORBIDDEN = 'person/post-picture-forbidden',
  ADD_PICTURE_NOT_FOUND = 'person/post-picture-not-found',
  ADD_PICTURE_ALREADY_EXISTS = 'person/post-picture-already-exists',
}

export const errors = {
  [PersonErr.FETCH_FAILED]: 'Failed to fetch person API',
  [PersonErr.NOT_FOUND]: 'Person not found',
  [PersonErr.PUT_FAILED]: 'Failed to update person',
  [PersonErr.CREATE_PERSON_FAILED]: 'Failed to create new person',
  [PersonErr.POST_FAILED]: 'Failed to create person',
  [PersonErr.ADD_PICTURE_FAILED]: 'Failed to add picture to person profile',
  [PersonErr.ADD_PICTURE_FORBIDDEN]:
    'Failed to add picture to person profile, access denied',
  [PersonErr.ADD_PICTURE_NOT_FOUND]:
    'Failed to add picture to person profile, not exists',
  [PersonErr.ADD_PICTURE_ALREADY_EXISTS]:
    'Failed to add picture to person profile, already exists',
  [PersonErr.CREATE_ADDRESS_FAILED]: 'Failed to create new address',
  [PersonErr.PUT_ADDRESS_FAILED]: 'Failed to update address',
  [PersonErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
};

export const errorFactory = new ErrorFactory<PersonErr>('Person', errors);
