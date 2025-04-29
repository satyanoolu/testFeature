//join()-it converts array to string
let a=["1","2","3"];
let b = a.join(',');
console.log(b);

let fruits = ["apple", "banana", "cherry"];

// Using join() with a comma (default)
let result1 = fruits.join();
console.log(result1); // Output: "apple,banana,cherry"

// Using join() with a custom delimiter
let result2 = fruits.join(" - ");
console.log(result2); // Output: "apple - banana - cherry"

// Using join() with no delimiter (empty string)
let result3 = fruits.join("");
console.log(result3); // Output: "applebananacherry"
//using tostring()
let fruits1 = ["apple", "banana", "cherry"];
let result = fruits1.toString();
console.log(result); // Output: "apple,banana,cherry"
//using for loop
let fruits2 = ["apple", "banana", "cherry"];
let result10 = "";
for (let i = 0; i < fruits2.length; i++) {
    result10 += fruits2[i];
    if (i < fruits2.length - 1) {
        result10 += ", "; // Add a separator if it's not the last element
    }
}
console.log(result10); // Output: "apple, banana, cherry"
