import { SherlError } from '../errors';

function filterSherlError(error: unknown, callBackError: unknown): unknown {
  if (error instanceof SherlError) {
    return error;
  }
  return callBackError;
}

export { filterSherlError };
