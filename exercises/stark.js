class Stark {

  constructor(name, location = 'Winterfell') {
    this.name = name;
    this.location = location;
    this.safe = false;
  }

  houseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    }
    else if (this.safe === false) {
      return 'Winter is Coming';
    }
  }

}

module.exports = Stark;