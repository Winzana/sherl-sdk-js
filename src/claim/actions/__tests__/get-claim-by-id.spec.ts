import * as MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Fetcher } from '../../../common/api';
import { getClaimById } from '../get-claim-by-id.action';
import { errorFactory } from '../../errors';
import { endpoints } from '../../api/endpoints';
import { StringUtils } from '../../../common/utils';

describe('getClaimById', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('should return claim data on successful request (status 200)', async () => {
    const claimId = '123';
    const mockData = {
      /* Your mock claim data here */
    };

    mockAxios
      .onGet(StringUtils.bindContext(endpoints.CLAIM_ID, { id: claimId }))
      .reply(200, mockData);

    const fetcher = new Fetcher(
      axios /* Your error factory here */,
      errorFactory,
    );
    const result = await getClaimById(fetcher, claimId);

    expect(result).toEqual(mockData);
  });

  it('should throw error on 403 Forbidden response', async () => {
    const claimId = '123';

    mockAxios
      .onGet(StringUtils.bindContext(endpoints.CLAIM_ID, { id: claimId }))
      .reply(403);

    const fetcher = new Fetcher(
      axios /* Your error factory here */,
      errorFactory,
    );

    await expect(
      getClaimById(fetcher, claimId),
    ).rejects.toThrow(/* Your expected error here */);
  });

  it('should throw error on 404 Not Found response', async () => {
    const claimId = '123';

    mockAxios
      .onGet(StringUtils.bindContext(endpoints.CLAIM_ID, { id: claimId }))
      .reply(404);

    const fetcher = new Fetcher(
      axios /* Your error factory here */,
      errorFactory,
    );

    await expect(
      getClaimById(fetcher, claimId),
    ).rejects.toThrow(/* Your expected error here */);
  });

  // Add more test cases for other HTTP status codes as needed
});
