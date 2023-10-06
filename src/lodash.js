export function head(array) {
  return array != null && array.length ? array[0] : undefined;
}

export function hasIn(object, key) {
  return object != null && key in Object(object);
}

export function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) === '[object Boolean]')
  );
}

export function toString(value) {
  if (value == null) {
    return '';
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map((other) => (other == null ? other : toString(other)))}`;
  }
  if (isSymbol(value)) {
    return value.toString();
  }
  const result = `${value}`;
  return result === '0' && 1 / value === -INFINITY ? '-0' : result;
}

export function split(string, separator, limit) {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  if (string && (typeof separator === 'string' || (separator != null && !isRegExp(separator)))) {
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}