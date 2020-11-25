let a = 10,
  b = 20,
  c = 30;

function Data() {
  console.log("123");
}


// 默认导出
export default {
  a,
  b,
  c,
  Data
}

// 按需导出
export let s1 = 11
export let s2 = 22
export function getNum(a, b) {
  return a + b
}