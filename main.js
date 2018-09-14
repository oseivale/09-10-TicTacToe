document.addEventListener('DOMContentLoaded', function(){

var makeMove = document.querySelectorAll('.board-box');
var i = 0;

makeMove.forEach(function(e){
e.addEventListener('click', function(){

  if(i % 2 === 0){
      e.classList.add('x-move')
      e.innerHTML = "X";
      e.style.fontSize = "130px";
      e.style.fontFamily = "Varela Round, sans-serif";
      e.style.textAlign = "center";
      e.style.color = "#4a57c2";
      i++
    } else {

      e.classList.add('x-move')
      e.innerHTML = "O";
      e.style.fontSize = "130px";
      e.style.fontFamily = "Varela Round, sans-serif";
      e.style.textAlign = "center";
      e.style.color = "#4a57c2";
      i++
    }
  })
})






})
