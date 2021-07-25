const play1score = document.getElementById('play1');
const play2score = document.getElementById('play2');
const wsore = document.querySelector('p span');
const inputscores = document.getElementById('inputscore');
let play1btn = document.getElementById('player1');
let play2btn = document.getElementById('player2');
const resetbtn = document.getElementById('reset');

let play1 = 0;

let play2 = 0;

let winscore = 5;
let gameover = false;


play1btn.addEventListener('click', function(){
   
   if(!gameover){
       play1++;
     if(play1===winscore){

    	console.log("game over");
    	 gameover=true;
    	  play2btn.setAttribute('disabled','disabled');
          play1btn.setAttribute('disabled','disabled');
    }


}


      play1score.textContent = play1;




})



play2btn.addEventListener('click', function(){
   

   if(!gameover){
      play2++;

      if(play2===winscore){

       console.log('game over');
 gameover=true;
       play2btn.setAttribute('disabled','disabled');
       play1btn.setAttribute('disabled','disabled');

}
}
      play2score.textContent = play2;

      


})


resetbtn.addEventListener('click', function(){

let play1 = 0;

let play2 = 0;

let winscore = 5;

   play1score.textContent = 0;
   play2score.textContent = 0;

play2btn.removeAttribute('disabled');
       play1btn.removeAttribute('disabled');



})


inputscores.addEventListener('change', function(){

     winscore =Number(inputscores.value);

    wsore.textContent = inputscores.value;



})

