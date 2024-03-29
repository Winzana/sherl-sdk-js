export interface IBugReport {
  id: string;
  osName: string;
  browserName: string;
  windowHeight: number;
  windowWidth: number;
  contactEmail: string;
  message: string;
  uri: string;
  consumerId: string;
  createdAt: string;
}

export interface IBugReportInputDto {
  osName: string;
  browserName: string;
  windowHeight: number;
  windowWidth: number;
  contactEmail: string;
  message: string;
}
