import { setConfigValue, getPublicConfig } from './actions';

class ConfigProvider {
  public setConfigValue = async (
    code: string,
    isPublic: boolean,
    value: boolean,
    appliedTo: string,
  ) => {
    const config = await setConfigValue(code, isPublic, value, appliedTo);
    return config;
  };

  public getPublicConfig = async (code: string) => {
    const config = await getPublicConfig(code);
    return config;
  };
}

export { ConfigProvider };
