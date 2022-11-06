var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }
fillFoodBowl() {
  this.dog.eat()
  // or this.dog.hungry = false
  }
  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  }
  introduceNewFriends(newFriend) {
    // this.dog.makeNewFriend(newFriend)
    this.dog.friends.push(newFriend.name)
  }
  adoptAPup(dogName, dogAge) {
    if (this.dog === undefined) {
    var rocky = new Dog({name: dogName, age: dogAge })
    this.dog = rocky
  } else {
    return "You can't adopt ${dogName}. You already have ${this.dog.name}!";
  }
    // return "you can't adopt Chloe. You already have Cap!";
    //make instance of dog then reassign this.dog to that instance
    //name and age, rocky and 2

  }
}


module.exports = Person;
