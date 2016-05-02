var BettingGame = {
  bankroll: 100,
  number: null,
  bet: null,
  guess: null,

  start: function() {
    while(this.bankroll > 0) {
      this.generateRand();
      this.bet = parseInt(prompt("Please enter a bet between $5 and $10:"));
      this.guess = parseInt(prompt("Please enter a number:"));
      console.log(this.bet);
      console.log(this.guess);
      this.checkGuess();
      this.updateBankroll();      
    }
  },
  generateRand: function() {
    this.number = Math.floor(Math.random() * 10);
    console.log(this.number);
  },
  checkGuess: function() {
    if (this.guess === this.number) {
      console.log("Yay!");
      return "correct";
    } 
    else if ((this.guess === this.number + 1) || (this.guess === this.number - 1)) {
      return "almost"
    }
  },
  updateBankroll: function() {
    if (this.checkGuess() === "correct") {
      this.bankroll += this.bet;
      console.log(this.bankroll);
      alert("Correct! Current bankroll: " + this.bankroll);
    } 
    else if (this.checkGuess() === "almost") {
      console.log(this.bankroll);
      alert("Almost! Current bankroll: " + this.bankroll);
    }
    else {
      this.bankroll -= this.bet;
      console.log(this.bankroll);
      alert("Wrong! Current bankroll: " + this.bankroll);
    }
  }
};

BettingGame.start();
