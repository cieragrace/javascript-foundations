var Material = require("./material.js");

class Craft {
  constructor(newCraft) {
    this.name = newCraft.type;
    this.materials = newCraft.materials
    this.completed = false;
}
completeCraft() {
  this.completed = true;
  return 'All done! It looks great!'
}
calculateProjectTotal() {
  var cost = 0
  for (var i = 0; i < this.materials.length; i ++) {
    cost += this.materials[i].price * this.materials[i].amount
  }
  return cost

}
}
module.exports = Craft;
