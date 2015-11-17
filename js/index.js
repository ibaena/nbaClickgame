//Global Variables

var players = document.getElementsByClassName("nbaImg");          //convert all images to variable for players
var score=0;                                                      //initialized score to track mouse clicks
var startTime = document.getElementById('start');  
var resetGame = document.getElementById('restart')         


//The Timer to start for the game when button clicked



function start() {
    setTimeout(function()
    { 
      if (score<10) {
         alert("You need some practice! You clicked on " +score+" images!" ); 
      }
      else if(score>=10 && score<=15){
          alert("Not bad you clicked on " +score+" images!" ); 
      }
      else{

         alert("Awesome job you clicked on " +score+" images!" ); 
      }; 
    }, 10000);
}
startTime.addEventListener("click",start);

//Loop to set count for pictures clicked

for (var i = 0; i < players.length; i++) {
  players[i].addEventListener("click", function counter() 
  {
      score = score+1;
      //alert(score);
      this.disabled=true;
  });
}

//Load and reload page

  function restartGame(){
      window.location.reload();
  };
resetGame.addEventListener("click",restartGame);

