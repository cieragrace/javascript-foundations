
class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
}
celebrateBirthday() {
  this.age += 1
  if (this.age > 32) {
    this.adult = true
  } else if (this.age >= 101) {
    this.old = true
  }
}
getRing() {
  if (name === 'Frodo') {
    this.hasRing = true;
  }
 }
}













module.exports = Hobbit;
