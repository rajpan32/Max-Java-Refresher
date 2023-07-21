export let val1 = "Hello";
export let val2 = "World";

export default "React";

export function transformToObjects(numberArray) {
  let obj = numberArray.map((item) => ({ val: item }));
  return obj;
}
