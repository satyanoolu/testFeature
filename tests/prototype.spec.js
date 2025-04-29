function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}.`);
  };
  
  // Creating objects
  const alice = new Person('Alice', 25);
  const bob = new Person('Bob', 30);
  
  // Using the prototype method
  alice.greet(); // Output: Hi, my name is Alice.
  bob.greet();   // Output: Hi, my name is Bob.
//------------------------------------------------------
function Car() {
    console.log("Car instance created!");
};

// add a property to prototype
Car.prototype.color = "Red";

// add a method to the prototype
Car.prototype.drive = function () {
    console.log(`Driving the car painted in ${this.color}...`);
};

// display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

// call the added method
Car.prototype.drive();  