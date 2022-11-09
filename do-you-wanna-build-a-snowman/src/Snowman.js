class Snowman {
  constructor(snowmanDeets) {
    this.carrots = snowmanDeets.carrots;
    this.coal = snowmanDeets.coal;
    this.buttons = snowmanDeets.buttons;
    this.snowballs = snowmanDeets.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
        return this.magicHat = false
    } else {
        return this.magicHat = true
    // return this.magicHat = false
    }
  }
  }



module.exports = Snowman;
