/*
Abdulaziz Alfawzan.
Project number One.
GA-JavaScript.
*/
//Q1:
console.log("---------Question 1---------")
check = function (a, b) {
    return (a.includes(b))
}
console.log("Answer is " + check([1, 2, 3, 4, 5], 5) + ".")
console.log("Answer is " + check([1, 2, 3, 4, 5], 0) + ".")
console.log("Answer is " + check([1, 2, 3, 4, 5]) + ".")
console.log("Answer is " + check([], 5) + ".")
console.log("----------------------------")
console.log("----------------------------")

//Q2: 
console.log("---------Question 2---------")
convertToSeconds = function (a, b) {
    a *= 3600
    b *= 60
    return (a + b)
}
console.log("Answer is " + convertToSeconds(1, 3) + " seconds.")
console.log("Answer is " + convertToSeconds(2, 0) + " seconds.")
console.log("Answer is " + convertToSeconds(0, 0) + " seconds.")
console.log("----------------------------")
console.log("----------------------------")

//Q3:
console.log("---------Question 3---------")
var aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
        {
            type: 'goldfish',
            size: '3.5 inches',
            color: 'golden'
        },
        {
            type: 'puffer',
            size: '4 inches',
            color: 'tan'
        },
        {
            type: 'clown',
            size: '3 inches',
            color: 'orange'
        }
    ]
}
//1
console.log("1: " + aquarium.capacityInGallons)
//2
console.log("2: " + (aquarium.numberOfRocks + 2))
//3
console.log("3: " + JSON.stringify(aquarium.fish[2]))
//4
console.log("4: " + JSON.stringify(aquarium.fish[1].size))
//5
console.log("5: " + JSON.stringify(aquarium.fish[0].size = "4 inches"))
//6
aquarium.fish.push({ type: 'starfish', size: '5 inches', color: 'blue' })
console.log("6: " + JSON.stringify(aquarium.fish[3]))
console.log("----------------------------")
console.log("----------------------------")

//Q4:
console.log("---------Question 4---------")
//4
data = (require('./data'));
var parsed = JSON.parse(data);

let logData = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log(parsed.people[i])
    }
}
console.log("-----------Q4_4-------------")
console.log(logData())
console.log("----------------------------")
console.log("----------------------------")
//5
let logNames = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log("logName: " + parsed.people[i].name)
    }
}
console.log("-----------Q4_5-------------")
console.log(logNames())
console.log("----------------------------")
console.log("----------------------------")
//6
let logNameEyes = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log("Name: " + parsed.people[i].name +
            ".      Eye color: " + parsed.people[i].eye_color)
    }
};
console.log("-----------Q4_6-------------")
console.log(logNameEyes())
console.log("----------------------------")
console.log("----------------------------")
//7
let logByMass = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        if (parsed.people[i].mass > 75) {
            console.log("Name: " + parsed.people[i].name)
        }
    }
};
console.log("-----------Q4_7-------------")
console.log(logByMass())
console.log("----------------------------")
console.log("----------------------------")

//Bonus Questions:
//Q1:
console.log("--------- Bonus Question 1---------")
let randomNumber = function(num){
    return Math.floor(Math.random() * Math.floor(num))
}
console.log("Random number: " + randomNumber(5))
console.log("----------------------------")
console.log("----------------------------")

//Q2:
console.log("--------- Bonus Question 2---------")
let divisible = function(num){
    if((num % 400 == 0) || (num % 4 == 0) && !(num % 100 == 0)){
        return true
    }else{
        return false
    }
}
console.log("Divisible: " + divisible(2020))
console.log("Divisible: " + divisible(1800))
console.log("Divisible: " + divisible(2000))
console.log("Divisible: " + divisible(2019))
console.log("----------------------------")
console.log("----------------------------")