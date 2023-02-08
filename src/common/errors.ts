export type ErrorMap<ErrorCode extends string> = {
  readonly [K in ErrorCode]?: string;
};

export interface ErrorData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any | undefined;
}

type UnknownErr = 'unknown';

// Config error codes
export enum ConfigErr {
  MISSING_CREDENTIALS = 'missing-credentials',
  INVALID_URI = 'invalid-uri',
}

const configErrors = {
  [ConfigErr.MISSING_CREDENTIALS]: 'Missing API credentials',
  [ConfigErr.INVALID_URI]: 'Invalid API URI',
};

// HTTP error codes
export enum HttpErr {
  HTTP_BAD_REQUEST = 'http-bad-request',
  HTTP_UNAUTHORIZED = 'http-unauthorized',
  HTTP_FORBIDDEN = 'http-forbidden',
  HTTP_NOT_FOUND = 'http-not-found',
}

export function getErrorCodeByHttpStatus(status: number): HttpErr | UnknownErr {
  switch (status) {
    case 400:
      return HttpErr.HTTP_BAD_REQUEST as HttpErr;
    case 401:
      return HttpErr.HTTP_UNAUTHORIZED as HttpErr;
    case 403:
      return HttpErr.HTTP_FORBIDDEN as HttpErr;
    case 404:
      return HttpErr.HTTP_NOT_FOUND as HttpErr;
    default:
      return 'unknown';
  }
}

const httpErrors = {
  [HttpErr.HTTP_BAD_REQUEST]: '400 Bad request',
  [HttpErr.HTTP_UNAUTHORIZED]: '401 Unauthorized',
  [HttpErr.HTTP_FORBIDDEN]: '403 Forbidden',
  [HttpErr.HTTP_NOT_FOUND]: '404 Not found',
};

// Export common err
export const CommonErr = { ...ConfigErr, ...HttpErr };
const commonErrors = {
  ...configErrors,
  ...httpErrors,
};

type CommonErrorCode = keyof typeof commonErrors | UnknownErr;

const ERROR_NAME = 'SherlError';

export interface SherlError extends Error {
  readonly code: string;
  readonly message: string;
  readonly name: typeof ERROR_NAME;
  readonly data?: ErrorData;
  readonly stack?: string;
}

export class SherlError extends Error {
  readonly name = ERROR_NAME;

  constructor(
    readonly code: string,
    message: string,
    readonly data?: ErrorData,
  ) {
    super(message);

    Object.setPrototypeOf(this, SherlError.prototype);

    if (Error.captureStackTrace) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}

export class ErrorFactory<ErrorCode extends string> {
  constructor(
    private readonly domain: string,
    private readonly domainName: string,
    private readonly errors?: ErrorMap<ErrorCode | CommonErrorCode>,
  ) {}

  /**
   * Create error instance based on error code
   *
   * @template K
   * @param {K} code
   * @param {ErrorData} [data]
   * @returns
   * @memberof ErrorFactory
   */
  create<K extends ErrorCode>(code: K | CommonErrorCode, data?: ErrorData) {
    const identifier = `${code}`;

    let template: string | undefined =
      (this.errors && this.errors[code]) ||
      commonErrors[code as keyof typeof commonErrors];

    if (template && data) {
      template = ErrorFactory.bindData(template as string, data);
    } else if (!template) {
      template = 'Error';
    }

    const message = `[${this.domainName}] ${template} (${identifier})`;
    const error = new SherlError(identifier, message, data);

    return error;
  }

  /**
   * Replace tokens in template by data
   *
   * @static
   * @param {string} template
   * @param {ErrorData} data
   * @returns
   * @memberof ErrorFactory
   */
  public static bindData(template: string, data: ErrorData) {
    return template.replace(/\{\$([^}]+)}/g, (_, key) => {
      const value = data[key];
      return value || `<${key}>`;
    });
  }
}
