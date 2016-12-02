
var chosenCharacter = "";
var chosenEnemy = "";
var fighterHP = 0;
var defenderHP = 0;
var fighterAttackPwr = 0;
var defenderCounterPwr = 0;

var reyHP = 500;
var reyBaseAttack = 60;
var reyCounter = 85;//use math.random for some fun.
var vaderHP = 1000;
var vaderBaseAttack = 120;
var vaderCounter = 120;
var chewieHP = 800;
var chewieBaseAttack = 110;
var chewieCounter = 100;
var phasmaHP = 700;
var phasmaBaseAttack = 80;
var phasmaCounter = 75;

$(document).ready(function(){

	$("#choose-vader").on("click", function(){
		$(".character-choice-panel").animate({ opacity: "0.05" });
		$(".hide-and-show-title").css("display","block")
		console.log("vader chosen");
	});

	$("#choose-rey").on("click", function(){

		console.log("rey chosen");
	});

	$("#choose-chewie").on("click", function(){

		console.log("chewie chosen");
	});

	$("#choose-phasma").on("click", function(){

		console.log("phasma chosen");
	});





});

