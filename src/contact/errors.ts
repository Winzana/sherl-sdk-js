import { ErrorFactory } from '../common/errors';

export enum ContactErr {
  CONTACT_FAILED = 'contact/send-contact-failed',
  CONTACT_PERSON_FAILED = 'contact/contact-person-failed',
}

export const errors = {
  [ContactErr.CONTACT_FAILED]: 'Failed to send contact',
  [ContactErr.CONTACT_PERSON_FAILED]: 'Failed to contact person',
};

export const errorFactory = new ErrorFactory<ContactErr>('Contact', errors);
