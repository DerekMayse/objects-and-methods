// object method 

// methods do things and are functions that love inside of objects

// const me ={
//     firstName: "Derek", //property
//     lastName: "Mayse", //property
//     hobbies: ["something", "something1", "something2"],
//     lovesFood: true,
//     timeToWork:function(){   //method
//         window.alert ("work")
//     },
//     contentsOfStomach: [],
//     eat: function(item)
//     { //push eaten items into contents of stomach array
//        me.contentsOfStomach.push(item)
//        this.contentsOfStomach.push(item)  //same as me.contentsOfStomach.push(item)
//     }, 
//     puke: function(){
//        this.contentsOfStomach.length = 0
//     }
// }
// // me.timeToWork()  //console.log method
// me.eat("snacks")
// me.puke ()
// console.log (me.contentsOfStomach)




// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const pet ={
//      name: "Fungus Postule",
//      species: "chihuahua mutt something",
//      nicknames: "Tweak",
//      age: 1,
//      whine: function(){
//       window.alert ("woof")
//      },
//      emptyStomach:[],
//      poop: function(item){
//       pet.emptyStomach.push(item)
//      },
//      emptyBladder:[],
//      pee: function(item){
//      pet.emptyBladder.push(item)
//      },
//      favoriteToys:[],
//      play: function(toy){
//         this.favoriteToys.push(toy)
//          if( toy === "something" )
//          console.log(toy)
        
//      }

     
     
// }

// pet.whine()
// pet.poop("eww poop")
// pet.pee("i peed")
// pet.play("ball something")
// console.log(pet.emptyStomach, pet.emptyBladder)
// console.log(this.favoriteToys)

// console.log(pet.emptyStomach)
// console.log(pet.emptyBladder)
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()



// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.


// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders:[]
}

const chickenComboMeal = {
    sandwichType:"chicken",
    fies: true,
    drinksize:"gigantic"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
console.log (restaurant.orders)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()