// function palindrome (number){
//     let numstr = number.toString()
//     let reverseNumber = numstr.split('').reverse().join('');
//  if( numstr ==reverseNumber)
//  {
//     return("Given no is palindrome")
//  } 
//     return("given no is not a palindrome") 
// }
// console.log(palindrome(252));
// console.log(palindrome(333));


// function palindrome (number){
//     let numstr = number. toString()
//     let i, rev = "";
//     for (i=numstr.length-1;i>=0;i--) {
//         rev += numstr[i]; 
//     }
// if(rev == number){
//     return ("given no is palindrome")
// }
// return ("given no is not a palindrome.")

// }
// let number = "AlA";
// let number2 =333;
// console.log(palindrome(number));
// console.log(palindrome(number2));


function palindrome(number){
    let rev =0,temp =number;
    while(number>0){
        rev = rev*10+number%10;
        number = Math.floor(number/10);
    }
    return rev==temp;
}
console.log(palindrome(505));


