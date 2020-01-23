class Dragon {

  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eat_count = 0;
  }

  eat() {
    this.eat_count += 1;
    if (this.eat_count > 2) {
      this.hungry = false;
    }
  }

}

module.exports = Dragon;