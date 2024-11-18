export const isNum = (v) => typeof v === 'number' && !isNaN(v);

export const isStr = (v) => typeof v === 'string';

export const isFn = (v) => typeof v === 'function';

export const parseClassName = (v) => (isStr(v) || isFn(v) ? v : null);