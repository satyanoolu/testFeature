// class person{
//     constructor(name,age)
//     {
//     this.name = name;
//     this.age =age;
//     }

// g(){
//     console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
//    }
// }
   
// let p1 =new person("satya",30);
// p1.g();
class mycar{
    constructor(name,color,year)
    {
        this.name = name;
        this.color =color;
        this.year = year;
    }

d(){
    console.log (`my car name is ${this.name} car color is ${this.color} and year is ${this.year}`);
}
}
let mine = new mycar("BMW","read",2025);
mine.d();
