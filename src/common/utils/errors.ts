import { SherlError } from '../errors';

function getSherlError(error: unknown, callBackError: SherlError): SherlError {
  if (error instanceof SherlError) {
    return error;
  }
  return callBackError;
}

export { getSherlError };
