class Dog {
  constructor(dogDeets) {
    this.name = dogDeets.name;
    this.age = dogDeets.age;
    this.hungry = true;
    this.energyLevel = 5;
    this.friends = []
  }
eat() {
  if (this.hungry === false) {
    return "I refuse to eat."
  } else {
    this.hungry = false;
    return "Yum!"
  }
}
fetchBall() {
  if (this.energyLevel > 3) {
    this.energyLevel -= 1;
    return "This is fun!"
  } else {
    return "Nah, I'm going to sleep instead."
  }
  }
sleep() {
  if (this.energyLevel <= 9) {
  this.energyLevel += 1;
} else {
  return 'I have too much energy to rest. I\'m going to chew something instead.'
  }
}
makeNewFriend(psi) {
  this.friends.push(psi.name)
  return psi.name
}
}



module.exports = Dog;
