export const endpoints = {
  GET_CALENDAR_EVENT_FOR_CURRENT_PERSON: '/api/calendar-events',
  CREATE_CALENDAR_EVENT: '/api/calendar/:calendarId/event',
  UPDATE_CALENDAR_EVENT: '/api/calendar/:calendarId/event/:eventId',
  DELETE_CALENDAR_EVENT: '/api/calendar/:calendarId/event/:eventId',
  GET_CALENDAR_EVENTS_WITH_CALENDAR_ID: '/api/calendar/:calendarId/events',
  GET_ONE_CALENDAR_EVENTS: '/api/calendar-event/:eventId',
  GET_ALL_CALENDAR_EVENTS_FOR_OWNER: '/api/calendar-events/owner',
};
