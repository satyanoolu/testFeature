// //Sum
// // let a=[3,5,9]
// let i,sum=0;
// for(i=0;i<a.length;i++){
//     sum=sum+a[i]
// }
// console.log(sum);

//Array Sort
let numbers = [5, 2, 9, 1, 5, 6];

// Sorting in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]

// Sorting in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]




function sortArray(arr) { //[5, 2, 9, 1, 5, 6]//[2,5,1,9,5,6]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // Swap elements
                let temp = arr[i];//5,5
                arr[i] = arr[j];//2,9
                arr[j] = temp;//5
                console.log(arr[i],arr[j],temp);//2,5
            }
        }
    }
    return arr;
}

// Example usage
let numbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = sortArray(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
