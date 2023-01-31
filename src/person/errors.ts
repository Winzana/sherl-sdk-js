import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  PUT_FAILED = 'put-person-failed',
  CREATE_PERSON_FAILED = 'create-person-failed',
  POST_FAILED = 'post-person-failed',
  ADD_PICTURE_FAILED = 'post-picture-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch person API',
  'not-found': 'Person not found',
  [PersonErr.PUT_FAILED]: 'Failed to update person',
  [PersonErr.CREATE_PERSON_FAILED]: 'Failed to create new person',
  [PersonErr.POST_FAILED]: 'Failed to create person',
  [PersonErr.ADD_PICTURE_FAILED]: 'Failed to add picture to person profile',
};

export const errorFactory = new ErrorFactory<PersonErr>(
  'person',
  'Person',
  errors,
);
