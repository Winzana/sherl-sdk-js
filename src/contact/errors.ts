import { ErrorFactory } from '../common/errors';

export enum ContactErr {
  CONTACT_NOT_FOUND = 'contact/contact-not-found',

  // SEND CONTACT
  SEND_CONTACT_FAILED = 'contact/send-contact-failed',
  SEND_CONTACT_FORBIDDEN = 'contact/send-contact-forbidden',

  // CONTACT PERSON
  CONTACT_PERSON_FAILED = 'contact/contact-person-failed',
  CONTACT_PERSON_FORBIDDEN = 'contact/contact-person-forbidden',
}

export const errors = {
  [ContactErr.CONTACT_NOT_FOUND]:
    'Failed to reach contact API. Contact not found',

  // CONTACT PERSON
  [ContactErr.CONTACT_PERSON_FAILED]: 'Failed to contact person',
  [ContactErr.CONTACT_PERSON_FORBIDDEN]:
    'Failed to contact person. Forbidden access',

  // SEND CONTACT
  [ContactErr.SEND_CONTACT_FAILED]: 'Failed to send contact',
  [ContactErr.SEND_CONTACT_FORBIDDEN]:
    'Failed to send contact. Forbidden access',
};

export const errorFactory = new ErrorFactory<ContactErr>('Contact', errors);
