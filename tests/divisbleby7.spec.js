//write a program which will find such numbers which are divisible by 7 but are not a multiple of 5,b/w 2000 and 3000 both are included.

function divBy7(number1,number2){
    if(number1>number2){
        big=number1
        small = number2
    }
    else{
        big=number2
        small =number1;
    }
    while (big>=small){
    
       if((number%7==0)&&(number%5!=0)){
            result=number;
            console.log (result);
       }
    number = --number;
    }
}
//console.log("the no's are divisible by 7 and not a multiple of 5 are:"((divBy7(3000))));
//console.log(divBy7(3000));
divBy7(1000,2000);

