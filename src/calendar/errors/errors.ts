import { ErrorFactory } from '../../common/errors';

export enum CalendarErr {
  GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED = 'calendar-event/get-failed-for-current-person',
  CREATE_CALENDAR_EVENT_FAILED = 'calendar-event/creation-failed',
  CREATE_CALENDAR_EVENT_FAILED_FORBIDDEN = 'calendar-event/creation-failed-forbidden',
  CREATE_CALENDAR_EVENT_FAILED_CALENDAR_NOT_EXIST = 'calendar-event/creation-failed-calendar-not-exist',
  CREATE_CALENDAR_EVENT_FAILED_EVENT_ALREADY_EXIST = 'calendar-event/creation-failed-event-already-exist',

  UPDATE_CALENDAR_EVENT_FAILED = 'calendar-event/update-failed',
  UPDATE_CALENDAR_EVENT_FAILED_FORBIDDEN = 'calendar-event/update-failed-forbidden',
  UPDATE_CALENDAR_EVENT_FAILED_NOT_EXIST = 'calendar-event/update-failed-not-exist',

  DELETE_CALENDAR_EVENT_FAILED = 'calendar-event/delete-failed',
  GET_CALENDAR_EVENTS_WITH_CALENDAR_ID_FAILED = 'calendar-event/get-with-calendar-id-failed',

  GET_CALENDAR_EVENT_BY_ID_FAILED = 'calendar-event/get-by-id-failed',
  GET_CALENDAR_EVENTS_FOR_OWNER_FAILED = 'calendar-event/get-by-owner-failed',

  FIND_CALENDAR_AVAILABILITIES_FAILED = 'calendar/get-availabilities-failed',
  GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED = 'calendar/get-availabilities-for-dates-failed',
  GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED = 'calendar/get-availabilities-for-location-failed',

  CREATE_CALENDAR_FAILED = 'calendar/creation-failed',

  UPDATE_CALENDAR_FAILED = 'calendar/update-failed',
  UPDATE_CALENDAR_FAILED_FORBIDDEN = 'calendar/update-failed-forbidden',
  UPDATE_CALENDAR_FAILED_NOT_EXIST = 'calendar/update-failed-not-exist',

  DELETE_CALENDAR_FAILED = 'calendar/delete-failed',
  GET_ONE_CALENDAR_FAILED = 'calendar/get-one-failed',
  FIND_ONE_CALENDAR_FAILED = 'calendar/find-one-failed',
}

export const errors = {
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_CURRENT_PERSON_FAILED]:
    'Failed to get current person calendar events',
  [CalendarErr.CREATE_CALENDAR_EVENT_FAILED]: 'Failed to create calendar event',
  [CalendarErr.CREATE_CALENDAR_EVENT_FAILED_FORBIDDEN]:
    'Failed to create calendar event, access denied',
  [CalendarErr.CREATE_CALENDAR_EVENT_FAILED_CALENDAR_NOT_EXIST]:
    'Failed to create calendar event, calendar not exist',
  [CalendarErr.CREATE_CALENDAR_EVENT_FAILED_EVENT_ALREADY_EXIST]:
    'Failed to create calendar event, event already exist',
  [CalendarErr.UPDATE_CALENDAR_EVENT_FAILED]: 'Failed to update calendar event',
  [CalendarErr.DELETE_CALENDAR_EVENT_FAILED]: 'Failed to delete calendar event',
  [CalendarErr.UPDATE_CALENDAR_EVENT_FAILED_FORBIDDEN]:
    'Failed to update calendar event, access denied',
  [CalendarErr.UPDATE_CALENDAR_EVENT_FAILED_NOT_EXIST]:
    'Failed to update calendar event, not exist',
  [CalendarErr.GET_CALENDAR_EVENTS_WITH_CALENDAR_ID_FAILED]:
    'Failed to get calendar event with calendar id',
  [CalendarErr.GET_CALENDAR_EVENT_BY_ID_FAILED]:
    'Failed to get calendar event by id',
  [CalendarErr.GET_CALENDAR_EVENTS_FOR_OWNER_FAILED]:
    'Failed to get calendar event by owner id',
  [CalendarErr.FIND_CALENDAR_AVAILABILITIES_FAILED]:
    'Failed to find calendar availabilities',
  [CalendarErr.GET_AVAILABILITIES_FOR_DATES_CALENDAR_FAILED]:
    'Failed to get availabilities for dates',
  [CalendarErr.GET_AVAILABILITIY_FOR_LOCATION_CALENDAR_FAILED]:
    'Failed to get availabilities for location',
  [CalendarErr.CREATE_CALENDAR_FAILED]: 'Failed to create calendar',
  [CalendarErr.UPDATE_CALENDAR_FAILED]: 'Failed to update calendar',
  [CalendarErr.UPDATE_CALENDAR_FAILED_FORBIDDEN]:
    'Failed to update calendar, access denied',
  [CalendarErr.UPDATE_CALENDAR_FAILED_NOT_EXIST]:
    'Failed to update calendar, not exist',
  [CalendarErr.DELETE_CALENDAR_FAILED]: 'Failed to delete calendar',
  [CalendarErr.GET_ONE_CALENDAR_FAILED]: 'Failed to get calendar',
  [CalendarErr.FIND_ONE_CALENDAR_FAILED]: 'Failed to find calendar',
};

export const errorFactory = new ErrorFactory<CalendarErr>('Calendar', errors);
