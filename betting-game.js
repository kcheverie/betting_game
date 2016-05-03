$( document ).ready(function() {
  $("button").text("START");
  $("button").addClass('start');

  $( ".start" ).click(BettingGame.start);
});


var BettingGame = {
  bankroll: 100,
  number: null,
  bet: null,
  guess: null,

  start: function() {
    BettingGame.generateRand();

    $("button").text("SUBMIT");
    $("button").removeClass('start').addClass('submit-bet');
    $("button").unbind("click");
    $(".submit-bet").click(BettingGame.submit_bet);

    $("#bet-message").removeClass("hidden");
    $("#bet-input").removeClass("hidden");
  },

  submit_bet: function() {
    $("button").removeClass('submit-bet').addClass('submit-guess');
    $("button").unbind("click");
    $(".submit-guess").click(BettingGame.submit_guess);

    BettingGame.bet = parseInt($('#bet-input').val());
    console.log("bet-----   " + BettingGame.bet);
  
    $("#bet-message").addClass("hidden");
    $("#bet-input").addClass("hidden");

    $("#guess-message").removeClass("hidden");
    $("#guess-input").removeClass("hidden");

  },

  submit_guess: function(){
    $("button").text("NEXT");
    $("button").removeClass('submit-guess').addClass('submit-next');
    $("button").unbind("click");
    $(".submit-next").click(BettingGame.submit_next);

    BettingGame.guess = parseInt($('#guess-input').val());
    console.log("guess-----   " + BettingGame.guess);

    $("#guess-message").addClass("hidden");
    $("#guess-input").addClass("hidden");

    BettingGame.updateBankroll();  

    $("#money").removeClass("hidden");
    $("#money").text("bankroll: " + BettingGame.bankroll);
  },

  submit_next: function(){

    $("#money").addClass("hidden");    
    $('#result-message').addClass("hidden");
    $("#bet-input").val("");
    $("#guess-input").val("");

    if (BettingGame.bankroll > 0) {
      BettingGame.start();
    }
    else {

      $("button").unbind("click");
      $("button").text('START AGAIN')
      $("button").removeClass('submit-next').addClass("start")
      $( ".start" ).click(BettingGame.start);
      BettingGame.bankroll = 100;
    }
  },

  generateRand: function() {
    BettingGame.number = Math.floor(Math.random() * 10);
    console.log("random number------------- " + BettingGame.number);
    return BettingGame.number;
  },

  checkGuess: function() {
    if (this.guess === this.number) {
      $('#result-message').removeClass("hidden");
      $('#result-message').text("Correct!");
      return "correct";
    } 
    else if ((this.guess === this.number + 1) || (this.guess === this.number - 1)) {
      $('#result-message').removeClass("hidden");
      $('#result-message').text("Almost!");
      return "almost";
    }
    else {
      $('#result-message').removeClass("hidden");
      $('#result-message').text("Wrong!");
      return "wrong";
    }
  },
  updateBankroll: function() {
    if (this.checkGuess() === "correct") {
      BettingGame.bankroll += BettingGame.bet;
      console.log("-----correct");
      console.log("your bankroll " + BettingGame.bankroll);
    } 
    else if (this.checkGuess() === "almost") {
      console.log("-----almost");
      console.log("your bankroll " + BettingGame.bankroll);
    }
    else {
      BettingGame.bankroll -= BettingGame.bet;
      console.log("-----wrong");
      console.log("your bankroll " + BettingGame.bankroll);
    }
  }
};









