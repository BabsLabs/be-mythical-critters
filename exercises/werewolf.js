class Werewolf {

  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    if (this.human === true) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }

  eat(victim) {
    if (this.hungry === false || this.human === true) {
        return 'I cannot eat because I am not hungry.';
    } else {
      victim.alive = false;
      this.wolf = false;
      this.hungry = false;
      this.human = true;
      return 'YUM!';
    }
  }


}

module.exports = Werewolf;