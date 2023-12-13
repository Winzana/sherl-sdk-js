import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ClaimErr, errorFactory } from '../errors';
import { IClaim } from '../types';

export const replyClaim = async (
  fetcher: Fetcher,
  id: string,
  replyContent: string,
): Promise<IClaim> => {
  try {
    const response = await fetcher.post<IClaim>(
      StringUtils.bindContext(endpoints.REPLY_CLAIM, { id }),
      {
        replyContent,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ClaimErr.REPLY_CLAIM_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(ClaimErr.CLAIM_NOT_FOUND);
      default:
        throw errorFactory.create(ClaimErr.REPLY_CLAIM_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.REPLY_CLAIM_FAILED));
  }
};
