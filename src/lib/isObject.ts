function isObject(value: any): boolean {
  if (value === null) return false;
  return typeof value === 'object' && value instanceof Date === false;
}

export default isObject;
