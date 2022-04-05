/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
function nextplayer()
{
   document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
   activePlayer===0?activePlayer=1:activePlayer=0;
   roundscore=0;
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
   document.querySelector('.dice').style.display='none';
}

let score,activePlayer,roundscore,play;
score=[0,0];
activePlayer=0;
roundscore=0;
play=true;

document.querySelector('.dice').style.display='none';


document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function()
{   
     if(play)
     {

	//random number
	let dice=Math.floor(Math.random()*6)+1;
	//display result
	document.querySelector('.dice').style.display='block';
	document.querySelector('.dice').src='dice-'+ dice +'.png';
    document.querySelector('#score-'+activePlayer).textContent=dice;
   //update the number
   if(dice!=1)
   {
   roundscore+=dice;
   document.querySelector('#current-'+ activePlayer).textContent=roundscore;
   }
   else
   {
   document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
   activePlayer===0?activePlayer=1:activePlayer=0;
   roundscore=0;
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
   document.querySelector('.dice').style.display='none';
   }
   }

});

document.querySelector('.btn-hold').addEventListener('click',function()
{

     if(play)
    {
	//add current score to global score
	score[activePlayer]+=roundscore;
	//update the UI
	document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
	//check for the winner
	if(score[activePlayer]>=30)
	{
		
	document.querySelector('#score-'+activePlayer).textContent='WINNER..';
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	play=false	;
	 document.querySelector('.dice').style.display='none';

	}
    //nextplayer
    else
    {
    	nextplayer();
    }}
});

document.querySelector('.btn-new').addEventListener('click',function()
{
score=[0,0];
activePlayer=0;
roundscore=0;
play=true;
document.querySelector('.dice').style.display='none';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

});