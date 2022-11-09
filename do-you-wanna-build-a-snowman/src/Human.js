var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0}
  }
gatherMaterials(type, amount) {
  this.materials[type] += amount
  console.log(this.materials[type])
}
buildASnowman() {
  var snowman1 = new Snowman(this.materials)
  return snowman1
}
placeMagicHat(snowman) {
  snowman.canWearMagicHat()
  if (snowman.magicHat) {
  return 'Woah, this snowman is coming to life!'
} else {
  return 'I guess I didn\'t build it correctly.'
}
}
}

module.exports = Human;
