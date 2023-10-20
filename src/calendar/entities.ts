export interface Calendar {
  id: string;
  uri: string;
  availabilities: string[];
  unaivailabilities: string[];
  ownerUri: string;
  aboutUri: string;
  enabled: boolean;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
  metadatas: {
    [key: string]: any;
  };
}

export interface CalendarEvent {
  id: string;
  uri: string;
  aboutUri: string;
  ownerUri: string;
  calenrdUri: string;
  startDate: string;
  endDate: string;
  location: Location;
  createdAt: Date;
  updatedAt: Date;
  metadatas: {
    [key: string]: any;
  };
}

export interface Availabality {
  from: string;
  to: string;
  available: boolean;
  isRoaming?: boolean;
  place?: Place;
}
