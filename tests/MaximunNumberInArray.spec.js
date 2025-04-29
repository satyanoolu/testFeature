function MaxiumunNumberinArray(arr){
    if(arr.length==0)
    {
        throw new error("Array is empty");
    }
   // return Math.max(...arr);
   let max = arr[0];
   for(let i=0;i<=arr.length;i++)
    if(arr[i]>max){
        max=arr[i];
    }
    return max;
}

const numbers =[4,7,8,5,9,3,12,2];
console.log(MaximumNumberinArray(numbers));