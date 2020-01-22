class Sphinx {

  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
      return this.riddles;
    }
  }

  attemptAnswer(guess) {
    // iterate through the riddles
    for (const riddle of this.riddles) {
      // check to see if the guess was correct
      if (guess === riddle.answer) {
        // if correct remove that riddle from the riddles array
        this.riddles.splice( this.riddles.indexOf(riddle), 1 );
        // if all riddles were guessed correctly then rage out
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${guess}\"???`;
        }
        // if they got the riddle correct but there are more riddles to guess
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
    }
    // if the guess doesn't match any of the answers we eat the guesser
    return this.heroesEaten += 1;
  }

}

module.exports = Sphinx;