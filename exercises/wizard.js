class Wizard {

  constructor(info) {
    this.name = info.name;
    if (info.bearded === false) {
      this.bearded = false;
    }
    else {
      this.bearded = true;
    }
    this.isRested = true;
    this.cast_count = 0;
  }

  incantation(spell) {
    return `${spell}`.toUpperCase();
  }

  cast() {
    this.cast_count += 1;
    if (this.cast_count > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
    else {
      return 'MAGIC BULLET';
    }
  }

}

module.exports = Wizard;