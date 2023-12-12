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
    if (response.status == 404) {
      throw errorFactory.create(ClaimErr.REPLY_CLAIM_NOT_FOUND_ERROR);
    }
    if (response.status !== 200) {
      throw errorFactory.create(ClaimErr.REPLY_CLAIM_FAILED);
    }
    return response.data;
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ClaimErr.REPLY_CLAIM_FAILED));
  }
};
