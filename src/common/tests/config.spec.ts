import { SherlGlobal } from '../store';
import { initializeConsoleApi } from '../../common/api';
import { init } from '../config';

jest.mock('../../common/api', () => ({
  ...jest.requireActual('../../common/api'),
  initializeApi: jest.fn(),
}));

describe('Config', () => {
  it('should init SDK', async () => {
    const apiSherlKey = 'SHERL_API_KEY';
    const apiSherlSecret = 'SHERL_API_SECRET';
    const apiConsoleKey = 'CONSOLE_API_KEY';
    const apiConsoleSecret = 'CONSOLE_API_KEY';

    init({ apiSherlKey, apiSherlSecret, apiConsoleKey, apiConsoleSecret });

    expect((global as SherlGlobal).SHERL_API_KEY).toEqual(apiSherlKey);
    expect((global as SherlGlobal).SHERL_API_SECRET).toEqual(apiSherlSecret);
    expect((global as SherlGlobal).CONSOLE_API_KEY).toEqual(apiConsoleKey);
    expect((global as SherlGlobal).CONSOLE_API_SECRET).toEqual(
      apiConsoleSecret,
    );
    expect(initializeConsoleApi).toHaveBeenCalled();
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
