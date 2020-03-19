import { addTwo } from "test2";

export function addOne(val) {
  return val + 1;
}

export function addThree(val) {
  return addTwo(addOne(val));
}

export function addFour(val) {
  return addThree(addOne(val));
}