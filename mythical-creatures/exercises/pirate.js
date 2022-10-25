class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || 'scallywag';
        this.cursed = false;
        this.booty = 0;
    }
robShip() {
  // this.booty += 100
  if (this.booty <= 400) {
  this.booty += 100
  return "YAARRR!"
} else {
  this.booty += 0
  this.cursed = true
  return "ARG! I've been cursed!"
}
}
liftCurse() {
  if (this.cursed === true) {
  this.booty -= 300
  this.cursed = false
  return 'Your curse has been lifted!'
} else {
  return 'You don\'t need to lift a curse!'
}
}
}









module.exports = Pirate;
