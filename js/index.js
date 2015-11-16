//Global Variables

var players = document.getElementsByClassName("nbaImg");          //convert all images to variable for players
var score=0;                                                      //initialized score



//Loop to set count pictures clicked

for (var i = 0; i < players.length; i++) {
  players[i].addEventListener("click", function() {
      score = score+1;
      console.log(score);
 
});
}
 
