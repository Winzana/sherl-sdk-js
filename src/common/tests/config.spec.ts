import { initializeApi } from '../../common/api';
import { init } from '../client';

jest.mock('../../common/api', () => ({
  ...jest.requireActual('../../common/api'),
  initializeApi: jest.fn(),
}));

describe('Config', () => {
  it('should init SDK', async () => {
    const apiKey = 'API_KEY';
    const apiSecret = 'API_SECRET';
    const Referer = 'http://localhost:4200';

    const client = init({ apiKey, apiSecret, Referer });

    expect(client.getOptions().apiKey).toEqual(apiKey);
    expect(client.getOptions().apiSecret).toEqual(apiSecret);
    expect(client.getOptions().Referer).toEqual(Referer);
    expect(initializeApi).toHaveBeenCalled();
  });

  it('should throw error if invalid arguments are provided', () => {
    const apiKey = 'API_KEY';
    let hasThrowError = false;

    try {
      init({ apiKey } as any);
    } catch (err) {
      hasThrowError = true;
    }

    expect(hasThrowError).toEqual(true);
  });
});
