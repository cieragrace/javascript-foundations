
class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
}
celebrateBirthday(age) {
  this.age += 1
  if (this.age > 32) {
    this.adult = true
  }
  if (this.age > 100) {
    this.old = true
  }
}
getRing() {
  if (this.name === "Frodo") {
  this.hasRing = true
  return "Here is the ring!"
  } else {
  this.hasRing = false
  return "You can't have it!"
  }
}
}

 //var newHobbit1 = new Hobbit("bilbo")
//console.log(newHobbit1)













module.exports = Hobbit;
