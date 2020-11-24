function Hangman(word) {
  this.word = word.toLowerCase();
  this.arrayCorrectSymbol = this.word.split('');
  this.arrayGuessSymbol = this.arrayCorrectSymbol.map(() => '_');
  this.error = 6;
  this.wrongSymbol = [];
  this.answer = false;

  this.guess = function (letter) {
    if (this.error === 0) {
      console.log(`Game over. Enter the "startAgain" command to start over.`);

      return this;
    }

    if (this.arrayGuessSymbol.every((elem) => elem !== '_')) {
      console.log(`You win. Enter the "startAgain" command to start over.`);

      return this;
    }

    this.arrayCorrectSymbol.forEach((elem, index) => {
      if (elem === letter) {
        this.arrayGuessSymbol[index] = letter;
        this.answer = true;
      }

      return;
    });

    if (this.answer === true) {
      console.log(this.arrayGuessSymbol.join(''));
      this.answer = false;
    } else {
      this.error--;
      this.wrongSymbol.push(letter);
      console.log(
        `wrong letter, errors left ${this.error} | ${this.wrongSymbol.join(
          ','
        )}`
      );
    }

    if (this.error === 0) {
      console.log(`Loss! You made 6 mistakes.`);

      return this;
    }

    return this;
  };

  this.getGuessedString = function () {
    return this.arrayGuessSymbol.join('');
  };

  this.getErrorsLeft = function () {
    return this.error;
  };

  this.getWrongSymbols = function () {
    return this.wrongSymbol;
  };

  this.getStatus = function () {
    console.log(
      `${this.arrayGuessSymbol.join('')} | errors left ${this.error}`
    );

    return this;
  };

  this.startAgain = function (newWord) {
    this.word = newWord.toLowerCase();
    this.arrayCorrectSymbol = this.word.split('');
    this.arrayGuessSymbol = this.arrayCorrectSymbol.map(() => '_');
    this.error = 6;
    this.wrongSymbol = [];
    this.answer = false;

    return this;
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
