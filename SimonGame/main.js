/*
blue = 0
red = 1
yellow = 2
green = 3
*/

var compTurn = false;
var clickcount = -1;
var correctclick = 0;
var count = 0;
var rand = 0;
var lvl = 1;
var arrcomp= [];
var arrplayer= [];
var audio0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audio4 = new Audio('http://www.orangefreesounds.com/button-sound-wrong/');

$(function start(){

$('#start').click( function()
{
	$('#level').html("Level: "+lvl);
////////////////////////////////////////////////Handles Computer Clicks
	var refreshInterval = setInterval(function ()
 	{
 		rand = Math.floor(Math.random()*4);
 		count++;
 		$('body').addClass('pointer');
 		
		if (rand === 0)
		{
			$('#blue').toggleClass('hovered');
			audio0.play();
			setTimeout(function(){
				$('#blue').toggleClass("hovered");
			}, 600);
	  		arrcomp.push(0);
	  		
		}
		else if (rand ==1)
		{
			$('#red').toggleClass("hovered");
			audio1.play();
			setTimeout(function(){
				$('#red').toggleClass("hovered");
			}, 600);
	  		arrcomp.push(1);
		}
		else if (rand ==2)
		{
			$('#yellow').toggleClass("hovered");
			audio2.play();
			setTimeout(function(){
				$('#yellow').toggleClass("hovered");
			}, 600);
	  		arrcomp.push(2);
		}
		else if (rand ==3)
		{
			$('#green').toggleClass("hovered");
			audio3.play();
			setTimeout(function(){
				$('#green').toggleClass("hovered");
			}, 600);
	  		arrcomp.push(3);
		}
		if(count >= lvl)
 		{
 			$('body').removeClass("pointer");
 			clearInterval(refreshInterval);
 		}
	}, 900);

});
////////////////////////////////////////////Handle Player Clicks
	$( "#blue" ).click(function() {
	audio0.play();
  	arrplayer.push(0);
  	clickcount++;
  	arrCheck();
	});
	$( "#red" ).click(function() {
		audio1.play();
	  	arrplayer.push(1);
	  	clickcount++;
	  	arrCheck();
	});
	$( "#yellow" ).click(function() {
	audio2.play();
  	arrplayer.push(2);
  	clickcount++;
  	arrCheck();
	});
	$( "#green" ).click(function() {
	audio3.play();
  	arrplayer.push(3);
  	clickcount++;
  	arrCheck();
	});

////////////////////////////////////////////checks if arrays match	
var arrCheck = function()
{
	if(arrcomp[clickcount] != arrplayer[clickcount])
	{
		clickcount--;
		arrplayer.pop();
		alert('Try Again');
	}
	else
	{
		correctclick++;
	}
	if (correctclick >= lvl)
	{
		alert('Next level -> Press Start');
		lvl++;
		count = 0;
 		rand = 0;
 		arrcomp= [];
		arrplayer= [];
		correctclick = 0;
		clickcount= -1;
	}

};

});

$('#strict').click( function(){
	

});