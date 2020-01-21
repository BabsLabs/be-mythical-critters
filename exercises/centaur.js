class Centaur {

  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.cranky_count = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shoot() {
    if (this.cranky_count >= 2 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    }
    this.cranky_count += 1;
    return 'Twang!!!';
  }

  run() {
    if (this.cranky_count >= 2) {
      this.cranky = true;
    }
    if (this.layingDown === true) {
      return 'NO!';
    }
    this.cranky_count += 1;
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    }
    if (this.layingDown === true) {
      this.cranky = false;
      this.cranky_count = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true && this.cranky_count > 0) {
      this.cranky = false;
      this.cranky_count = 0;
    }
    else if (this.cranky_count === 0 && this.cranky === false && this.standing === true) {
      this.cranky = true;
      this.cranky_count = 2;
    }
    else if (this.standing === false) {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;