// Arrays are a way to store multiple values in a single variable.
// They can hold any type of data, including numbers, strings, and even other arrays.

let thingsILike = ["chocolate", "bombom", "tortinha de limão", "sorvete", "pudim"];
let size = thingsILike.length; // Get the size of the array
console.log("I like " + size + " things: " + thingsILike.join(", "));
thingsILike.push("bolo de cenoura"); // Add an item to the end of the array

// There are many methods to manipulate arrays.
// Access w3schools for more information: https://www.w3schools.com/js/js_array_methods.asp
console.log(thingsILike);