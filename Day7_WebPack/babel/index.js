//  // 默认导入
//  import m1 from './m1.js'
//  
//  console.log(m1.a, m1.b, m1.c, m1.Data);
//  
//  
//  // 按需导入 
//  import { s1, s2, getNum } from './m1'
//  
//  console.log(s1, s2, getNum(1, 2));

// 按需导入和默认导入可以同时使用
//  import m1, { s1, s2, getNum } from "./m1"
//  
//  // 解构m1 
//  const { a, b, c, Data } = m1
//  
//  console.log(a, b, c, Data);
//  console.log(m1.a);
//  
//  console.log(s1);
//  console.log(getNum(1, 2));


//  导入的时候 可以使用 as 重命名
// import { s1 as ss1, s2 as ss2, getNum as getM } from './m1'
// console.log(ss1, ss2, getM(1, 2));


// improt './m1.js'  ; 可以直接执行导入的文件