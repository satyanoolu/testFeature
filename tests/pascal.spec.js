// function pascal(x)
// {
//     let i, j;
//     for(i=0;i<=x;i++)
//     {
//         let output ='';
    
//         for(j=0;j<=i;j++){
//           output+=pascal1(i,j)  
//         }
//         console.log(output)        
    
//     }
// }
// console.log(pascal(5));
// function pascal1(i,j)
// {
//   if(j==0 || i==j) {
//     return 1;
//   }
//   else{
//     return 
//   }
// }

// // 1 
// // 1 1 
// // 1 2 1 
// // 1 3 3 1 
// // 1 4 6 4 1


function generatePascalTriangle(numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
      triangle[i] = new Array(i + 1);
      triangle[i][0] = 1;
      triangle[i][i] = 1;

      for (let j = 1; j < i; j++) {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      } //triangle[3][1]= triangle[3 - 1][1 - 1] + triangle[3 - 1][1];
      //triangle[3][1]= triangle[2][0] + triangle[2][1];
  }

  return triangle;
}

function printPascalTriangle(triangle) {
  for (let row of triangle) {
      console.log(row.join(' '));
  }
}

let numRows = 4;
let pascalTriangle = generatePascalTriangle(numRows + 1);
printPascalTriangle(pascalTriangle);


