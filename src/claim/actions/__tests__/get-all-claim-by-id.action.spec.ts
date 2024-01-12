import { Fetcher } from '../../../common/api';
import { getAllClaims } from './../get-all-claims.action'; // Replace with the actual filename
import * as MockAdapter from 'axios-mock-adapter';
import axios, { Axios } from 'axios';
import { ClaimErr, errorFactory } from '../../errors';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import { Pagination } from '../../../common';
import { IClaim } from '../../types';
import { claimsFixtures } from '../__fixtures/claims';

describe('getAllClaims', () => {
  let mock: MockAdapter;
  let fetcher: Fetcher;

  beforeEach(() => {
    // Create a new instance of the Fetcher class with a mock Axios instance
    mock = new MockAdapter(axios);
    fetcher = new Fetcher(axios, errorFactory);
  });

  afterEach(() => {
    // Reset the mock adapter after each test
    mock.reset();
  });

  it('should return claims when the GET request is successful', async () => {
    const mockClaimsResponse = {
      status: 200,
      data: {
        view: { page: 1, total: 5, itemsPerPage: 5 },
        results: claimsFixtures,
      } as Pagination<IClaim>,
    };

    mock.onGet(endpoints.CLAIMS).reply(200, mockClaimsResponse.data);

    const result = await getAllClaims(fetcher, {
      /* mocked filters */
    });

    expect(result).toEqual(mockClaimsResponse.data);
  });

  it('should throw an error for forbidden status (403)', async () => {
    const mockForbiddenResponse = {
      status: 403,
      data: {
        /* mocked data */
      },
    };

    mock.onGet(endpoints.CLAIMS).reply(403, mockForbiddenResponse);

    await expect(
      getAllClaims(fetcher, {
        /* mocked filters */
      }),
    ).rejects.toThrowError(
      errorFactory.create(ClaimErr.GET_ALL_FORBIDDEN_ERROR),
    );
  });

  it('should throw an error for other error statuses', async () => {
    const mockErrorResponse = {
      status: 500,
      data: {
        /* mocked data */
      },
    };

    mock.onGet(endpoints.CLAIMS).reply(500, mockErrorResponse);

    await expect(
      getAllClaims(fetcher, {
        /* mocked filters */
      }),
    ).rejects.toThrowError(errorFactory.create(ClaimErr.GET_ALL_FAILED));
  });

  it('should throw a Sherl error for other errors during the request', async () => {
    const mockError = new Error('Mocked error');

    mock.onGet(endpoints.CLAIMS).networkError();

    await expect(
      getAllClaims(fetcher, {
        /* mocked filters */
      }),
    ).rejects.toThrowError(
      getSherlError(mockError, errorFactory.create(ClaimErr.GET_ALL_FAILED)),
    );
  });
});
