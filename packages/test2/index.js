export function addTwo(val) {
  return val + 2;
}

export function addTen(val) {
  return val + 10;
}

export function addFour(val) {
  return addTwo(addTwo(val));
}