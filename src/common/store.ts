export interface SherlGlobal {
  SHERL_API_KEY?: string;
  SHERL_API_SECRET?: string;
  CONSOLE_API_KEY?: string;
  CONSOLE_API_SECRET?: string;
  INSTANCE_TOKEN?: string;
}

export function isNodeEnv(): boolean {
  return typeof process !== 'undefined';
}

export function getGlobalObject() {
  return (isNodeEnv() ? global : window) as SherlGlobal;
}
