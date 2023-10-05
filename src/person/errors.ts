import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  PUT_FAILED = 'person/put-person-failed',
  CREATE_PERSON_FAILED = 'person/create-person-failed',
  POST_FAILED = 'person/post-person-failed',
  FETCH_FAILED = 'person/fetch-failed',
  NOT_FOUND = 'person/not-found',
  CREATE_ADDRESS_FAILED = 'person/create-address-failed',
  PUT_ADDRESS_FAILED = 'person/put-address-failed',
  DELETE_ADDRESS_FAILED = 'person/delete-address-failed',
  ADD_PICTURE_FAILED = 'post-picture-failed',
}

export const errors = {
  [PersonErr.FETCH_FAILED]: 'Failed to fetch person API',
  [PersonErr.NOT_FOUND]: 'Person not found',
  [PersonErr.PUT_FAILED]: 'Failed to update person',
  [PersonErr.CREATE_PERSON_FAILED]: 'Failed to create new person',
  [PersonErr.POST_FAILED]: 'Failed to create person',
  [PersonErr.ADD_PICTURE_FAILED]: 'Failed to add picture to person profile',
  [PersonErr.CREATE_ADDRESS_FAILED]: 'Failed to create new address',
  [PersonErr.PUT_ADDRESS_FAILED]: 'Failed to update address',
  [PersonErr.DELETE_ADDRESS_FAILED]: 'Failed to delete address',
};

export const errorFactory = new ErrorFactory<PersonErr>('Person', errors);
