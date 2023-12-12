import { SherlError } from '../errors';

/**
 * Returns either the provided error object if it is an instance of SherlError,
 * or the callBackError object.
 *
 * @param {unknown} error - The error object to check.
 * @param {SherlError} fallbackError - The fallback error object.
 * @return {SherlError} Either the provided error object or the fallback error object.
 */
function getSherlError(error: unknown, fallbackError: SherlError): SherlError {
  if (error instanceof SherlError) {
    return error;
  }
  return fallbackError;
}

export { getSherlError };
