// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.
let cat = {
    name: 'Teddy',
    age: 6,
    color: ["marrom", "e", "branco"]
}
console.log ("O nome do gato é: " + cat.name + "sua idade é " + cat.age + "suas cores são: " + cat.color.join(", "))
  

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.
cat.toy = "ossinho"
cat.age = 5;
console.log ("O nome do gato é: " + cat.name + "sua idade é " + cat.age + "suas cores são: " + cat.color.join(", ") + "ele tem um brinquedo: " + cat.toy)


// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".
let dog = {
    name: "marley",
    breed: 'Labrador',
    bark: function() {
   console.log("Woof!")
    }
}
dog.bark()

// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.
let market = {
    produto: ["feijão", "arroz", "sorvete"],
    price: [5, 10, 15]

}
console.log(market.produto + market.price)
// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

movie = {
    Title: "Mean Girls",
    Director: "Mark Waters",
    review : {Rating: "5", Comment: "Good"}};
console.log(`Rating: ${movie.review.Rating} Comment: ${movie.review.Comment}`);

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.
  
let scores = {
  Alice: 5,
  Bob: 7,
  Charlie: 4,
};

let total = 0;
for ( let i in scores){
    total += scores[i];
}
 console.log(`Total: ${total}`);

 