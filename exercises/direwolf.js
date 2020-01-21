class Direwolf {

  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;

      if (this.starksToProtect.length > 2) {
        this.starksToProtect.pop().safe = false;

        if (this.starksToProtect.length === 0) {
          this.huntsWhiteWalkers = true;
        }

        return this.starksToProtect;
      }
    }
  }

  leave(stark) {
    stark.safe = false;
    return this.starksToProtect = [];
  }

}

module.exports = Direwolf;