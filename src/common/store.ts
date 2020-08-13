export interface SherlGlobal {
  SHERL_API_KEY?: string;
  SHERL_API_SECRET?: string;
}

export function isNodeEnv(): boolean {
  return typeof process !== 'undefined';
}

export function getGlobalObject(): (Window | NodeJS.Global) & SherlGlobal {
  return isNodeEnv() ? global : window;
}
