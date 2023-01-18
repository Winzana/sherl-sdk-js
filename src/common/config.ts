import { getGlobalObject } from './store';
import { initializeConsoleApi, initializeSherlApi } from './api';
import { ErrorFactory, CommonErr } from './errors';

export interface InitOptions {
  apiSherlKey: string;
  apiSherlSecret: string;
  apiConsoleKey?: string;
  apiConsoleSecret?: string;
  apiUrl?: string;
}

const errorFactory = new ErrorFactory('config', 'Config');

export function init(options: InitOptions): void {
  if (
    typeof options.apiSherlKey === 'undefined' ||
    typeof options.apiSherlSecret === 'undefined'
  ) {
    throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
  }

  if (options.apiUrl && !options.apiUrl.match(/https?:\/\/[\w-.]+\/?$/)) {
    throw errorFactory.create(CommonErr.INVALID_URI);
  }

  const globalObject = getGlobalObject();
  globalObject.SHERL_API_KEY = options.apiSherlKey;
  globalObject.SHERL_API_SECRET = options.apiSherlSecret;

  if (options.apiConsoleKey && options.apiConsoleSecret) {
    globalObject.CONSOLE_API_KEY = options.apiConsoleKey;
    globalObject.CONSOLE_API_SECRET = options.apiConsoleSecret;
  }

  initializeSherlApi(options.apiUrl);
  if (options.apiConsoleKey && options.apiConsoleSecret) {
    initializeConsoleApi(options.apiUrl);
  }
}
