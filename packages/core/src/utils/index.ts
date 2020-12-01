import { parse } from 'query-string';

export const safeParse = (json: string): Object => {
  try {
    return JSON.parse(json);
  } catch(err) {
    return {};
  }
};

export const safeGet = (obj: any, keyChain: string, defaultVal?: any): any => {

  if(typeof obj !== 'object' || obj === null) {
    return defaultVal;
  }

  let val = obj;
  const keys = keyChain.split('.');
  for(const key of keys) {
    if(val[key] === undefined) {
      return defaultVal;
    } else {
      val = val[key];
    }
  }

  return val;
};

const parseConfig = {
  skipNull: true,
  skipEmptyString: true,
  parseNumbers: false,
  parseBooleans: false,
};

export const parseQuery = (): {[key: string]: any} => {
  return parse(location.search, parseConfig);
};
