//Counter Interval function

  var counter= 0;
 
  function myImg() {
  
    counter=counter+1;
    console.log(counter); 
    document.getElementById("help").innerHTML = counter;   
    
 }

  document.getElementsByClassName("nbaImg")[0].addEventListener("click",myImg());
