var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor() {
  this.statues = []
  }
  gazeAtVictim(victim) {
  for (var i = 0; i < this.statues.length; i++) {
  var statue = new Statue(victim.name)
    if (this.statues.length <= 3) {
      this.statues.push(statue)
  }
    //   if (statues.length === 3) {
    //   this.statues.splice(i, 1)
    // }
    }
  }
}


module.exports = Medusa;
