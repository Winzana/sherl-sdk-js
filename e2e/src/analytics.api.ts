import { fetcher } from './api';

export class AnalyticsApi {
  static getAnalyticsHealth(): Promise<any> {
    return fetcher.get('analytics/health');
  }

  static getBIAnalytics(): Promise<any> {
    return fetcher.post('analytics/bi');
  }
}
