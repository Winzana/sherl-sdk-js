import { SherlClient } from '../common';
import { BugReportProvider } from './provider';
import { IBugReport, IBugReportBody } from './types';

const bugReport = (client: SherlClient) => new BugReportProvider(client);
export { bugReport, IBugReport, IBugReportBody };
