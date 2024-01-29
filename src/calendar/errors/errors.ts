import { ErrorFactory } from '../../common/errors';

export enum CalendarErr {
  GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED = 'calendar-event/get-failed-for-current-person',
  GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FORBIDDEN = 'calendar-event/get-failed-for-current-person-forbidden',

  CREATE_CALENDAR_EVENT_FAILED = 'calendar-event/creation-failed',
  CREATE_CALENDAR_EVENT_FORBIDDEN = 'calendar-event/creation-failed-forbidden',
  CREATE_CALENDAR_EVENT_EVENT_ALREADY_EXIST = 'calendar-event/creation-failed-event-already-exist',

  UPDATE_CALENDAR_EVENT_FAILED = 'calendar-event/update-failed',
  UPDATE_CALENDAR_EVENT_FORBIDDEN = 'calendar-event/update-failed-forbidden',

  DELETE_CALENDAR_EVENT_FAILED = 'calendar-event/delete-failed',
  DELETE_CALENDAR_EVENT_FORBIDDEN = 'calendar-event/delete-failed-forbidden',

  GET_CALENDAR_EVENTS_BY_CALENDAR_ID_FAILED = 'calendar-event/get-by-calendar-id-failed',
  GET_CALENDAR_EVENTS_BY_CALENDAR_ID_FAILED_FORBIDDEN = 'calendar-event/get-by-calendar-id-failed-forbidden',

  GET_CALENDAR_EVENT_BY_ID_FAILED = 'calendar-event/get-by-id-failed',
  GET_CALENDAR_EVENT_BY_ID_FORBIDDEN = 'calendar-event/get-by-id-failed-forbidden',

  GET_CALENDAR_EVENTS_FOR_OWNER_FAILED = 'calendar-event/get-by-owner-failed',
  GET_CALENDAR_EVENTS_FOR_OWNER_FORBIDDEN = 'calendar-event/get-by-owner-failed-forbidden',

  FIND_CALENDAR_AVAILABILITIES_FAILED = 'calendar/get-availabilities-failed',
  FIND_CALENDAR_AVAILABILITIES_FORBIDDEN = 'calendar/get-availabilities-forbidden',

  GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED = 'calendar/get-availabilities-for-dates-failed',
  GET_AVAILABILITIES_FOR_DATES_CALENDAR_FORBIDDEN = 'calendar/get-availabilities-for-dates-forbidden',
  GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED = 'calendar/get-availabilities-for-location-failed',
  GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FORBIDDEN = 'calendar/get-availabilities-for-location-forbidden',

  CREATE_CALENDAR_FAILED = 'calendar/creation-failed',
  CREATE_CALENDAR_FORBIDDEN = 'calendar/creation-failed-forbidden',

  UPDATE_CALENDAR_FAILED = 'calendar/update-failed',
  UPDATE_CALENDAR_FORBIDDEN = 'calendar/update-failed-forbidden',

  DELETE_CALENDAR_FAILED = 'calendar/delete-failed',
  DELETE_CALENDAR_FORBIDDEN = 'calendar/delete-failed-forbidden',

  GET_ONE_CALENDAR_FAILED = 'calendar/get-one-failed',
  GET_ONE_CALENDAR_FORBIDDEN = 'calendar/get-one-failed-forbidden',

  FIND_ONE_CALENDAR_FAILED = 'calendar/find-one-failed',
  FIND_ONE_CALENDAR_FORBIDDEN = 'calendar/find-one-failed-forbidden',

  CALENDAR_NOT_FOUND = 'calendar/not-found',
  CALENDAR_EVENT_NOT_FOUND = 'calendar-event/not-found',

  GET_CALENDAR_BY_ID_FORBIDDEN = 'calendar/get-calendar-by-id-forbidden',
  GET_CALENDAR_BY_ID_FAILED = 'calendar/get-calendar-by-id-failed',

  USER_NOT_FOUND = 'user/not-found',
}

export const errors = {
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED]:
    'Failed to get current person calendar events',
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FORBIDDEN]:
    'Failed to get current person calendar events, access denied',
  [CalendarErr.CREATE_CALENDAR_EVENT_FAILED]: 'Failed to create calendar event',
  [CalendarErr.CREATE_CALENDAR_EVENT_FORBIDDEN]:
    'Failed to create calendar event, access denied',
  [CalendarErr.UPDATE_CALENDAR_EVENT_FAILED]: 'Failed to update calendar event',
  [CalendarErr.UPDATE_CALENDAR_EVENT_FORBIDDEN]:
    'Failed to update calendar event, access denied',
  [CalendarErr.DELETE_CALENDAR_EVENT_FAILED]: 'Failed to delete calendar event',
  [CalendarErr.DELETE_CALENDAR_EVENT_FORBIDDEN]:
    'Failed to delete calendar event, access denied',
  [CalendarErr.GET_CALENDAR_EVENTS_BY_CALENDAR_ID_FAILED]:
    'Failed to get calendar event by calendar id',
  [CalendarErr.GET_CALENDAR_EVENTS_BY_CALENDAR_ID_FAILED_FORBIDDEN]:
    'Failed to get calendar event by calendar id, access denied',
  [CalendarErr.GET_CALENDAR_EVENT_BY_ID_FAILED]:
    'Failed to get calendar event by id',
  [CalendarErr.GET_CALENDAR_EVENT_BY_ID_FORBIDDEN]:
    'Failed to get calendar event by id, access denied',
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_OWNER_FAILED]:
    'Failed to get calendar event by owner id',
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_OWNER_FORBIDDEN]:
    'Failed to get calendar event by owner id, access denied',
  [CalendarErr.FIND_CALENDAR_AVAILABILITIES_FAILED]:
    'Failed to find calendar availabilities',
  [CalendarErr.FIND_CALENDAR_AVAILABILITIES_FORBIDDEN]:
    'Failed to find calendar availabilities, access denied',
  [CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED]:
    'Failed to get availabilities for dates',
  [CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FORBIDDEN]:
    'Failed to get availabilities for dates, access denied',
  [CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED]:
    'Failed to get availabilities for location',
  [CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FORBIDDEN]:
    'Failed to get availabilities for location, access denied',
  [CalendarErr.CREATE_CALENDAR_FAILED]: 'Failed to create calendar',
  [CalendarErr.CREATE_CALENDAR_FORBIDDEN]:
    'Failed to create calendar, access denied',
  [CalendarErr.UPDATE_CALENDAR_FAILED]: 'Failed to update calendar',
  [CalendarErr.UPDATE_CALENDAR_FORBIDDEN]:
    'Failed to update calendar, access denied',
  [CalendarErr.DELETE_CALENDAR_FAILED]: 'Failed to delete calendar',
  [CalendarErr.DELETE_CALENDAR_FORBIDDEN]:
    'Failed to delete calendar, access denied',
  [CalendarErr.GET_ONE_CALENDAR_FAILED]: 'Failed to get calendar',
  [CalendarErr.GET_ONE_CALENDAR_FORBIDDEN]:
    'Failed to get calendar, access denied',
  [CalendarErr.FIND_ONE_CALENDAR_FAILED]: 'Failed to find calendar',
  [CalendarErr.FIND_ONE_CALENDAR_FORBIDDEN]:
    'Failed to find calendar, access denied',
  [CalendarErr.GET_CALENDAR_BY_ID_FORBIDDEN]:
    'Failed to get calendar by id, access denied',
  [CalendarErr.GET_CALENDAR_BY_ID_FAILED]: 'Failed to get calendar by id',
  [CalendarErr.CALENDAR_NOT_FOUND]: 'Calendar not found',
  [CalendarErr.CALENDAR_EVENT_NOT_FOUND]: 'Calendar event not found',
  [CalendarErr.USER_NOT_FOUND]: 'User not found',
};

export const errorFactory = new ErrorFactory<CalendarErr>('Calendar', errors);
