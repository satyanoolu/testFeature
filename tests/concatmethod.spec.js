// // 1. Using the Spread Operator
// // const array1 = [1, 2, 3];
// // const array2 = [4, 5, 6];

// // const concatenatedArray = [...array1, ...array2];
// // console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// // const a ="satya";
// // const b ="veni";
// // const concatarray=[...a,...b].join('');
// // console.log(concatarray);
// //--------------------------------------------------
// //2)Using push() with the Spread Operator
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// array1.push(...array2);
// console.log(array1); // Output: [1, 2, 3, 4, 5, 6]
// //3.Using a loop method()
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// for (let i = 0; i < array2.length; i++) {
//   array1.push(array2[i]);
// }

// console.log(array1); // Output: [1, 2, 3, 4, 5, 6]
// //4.Using Array.prototype.reduce()
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const concatenatedArray = array2.reduce((acc, item) => {
//   acc.push(item);
//   return acc;
// }, array1);

// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

let a =[1,2,3];
let b=[4,5,6];
console.log(a.concat(b));