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