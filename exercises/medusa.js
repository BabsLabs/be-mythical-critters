class Medusa {

  constructor(name){
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    if (this.statues.length < 3){
      victim.stoned = true;
      this.statues.push(victim);
    }
    else if (this.statues.length >= 3) {
      victim.stoned = true;
      this.statues.push(victim);
      let first_victim = this.statues.shift();
      first_victim.stoned = false;
    }
  }

}

module.exports = Medusa;