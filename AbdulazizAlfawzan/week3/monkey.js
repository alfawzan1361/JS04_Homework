/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/
function monkey(name, species, foodsEaten){
    this.name =  name,
    this.species = species,
    this.foodsEaten = foodsEaten

    this.eatSomething = function(thingAsString){
        this.foodsEaten = thingAsString
    }
}

var monkeyNumberOne = new monkey('Tato', 'Golden Lion')
var monkeyNumberTwo = new monkey('Toty', 'Black Howler')
var monkeyNumberThree = new monkey('Juda', 'Drill')

monkeyNumberOne.eatSomething('Banana')
monkeyNumberTwo.eatSomething('Apple')
monkeyNumberThree.eatSomething('Mango')

console.log(monkeyNumberOne)
console.log(monkeyNumberTwo)
console.log(monkeyNumberThree)
