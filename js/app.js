
var myWrapper = wrapper();


$(document).ready(function(){
	
	

  /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
    	myWrapper.NewGame();

  	});


    $("#guessButton").click(function(){
      
      var guessedNumber = $('#userGuess').val();
      guessedNumber = parseInt(guessedNumber,10); 
        if (!isNaN(guessedNumber))
            {
                myWrapper.ProcessGuess(guessedNumber);
            }            

    }); 

});


function wrapper(){

  var numberToBeGuessed;
  var attemptsCounter;
  var lastDifference;

 function NewGame(){

  	numberToBeGuessed = Math.floor((Math.random()*100)+1);
  	attemptsCounter = 0;
    lastDifference = 100;
    $('#guessList').empty();
	

 };

 function ProcessGuess(guessedNumber){
  
  attemptsCounter++;

  if (guessedNumber === numberToBeGuessed){

    $('#feedback').html('Bingo');
    NewGame();

  }

  else
  {
    if (computeTheDifference(guessedNumber))
    {
      // getting closer
      $('#feedback').html('Hotter');

    } else {

      //getting farther
      $('#feedback').html('Colder');

    };

    $('#count').html(attemptsCounter); 
    $('#guessList').append('<li><label>'+guessedNumber+'</label> </li>');

  };  
  
};

 function computeTheDifference(guessedNumber){

  var currentDifference = Math.abs(guessedNumber - numberToBeGuessed);

  if  (currentDifference < lastDifference)
  {
      lastDifference = currentDifference;
      return true;

  }else
    {
      lastDifference = currentDifference;
      return false;
    }
  };

  return{NewGame: NewGame, ProcessGuess:ProcessGuess};

};


