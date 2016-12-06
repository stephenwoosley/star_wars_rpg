// $(document).ready(function() {
// 	for (var pager = 0; pager < 88; pager++) {

// 		var url = "http://swapi.co/api/people/";
// 		var fillUrl = url + pager;
// 		$.get(fillUrl, function(data) {
// 			console.log(data);
// 		});
// 	}
// })

// TODO: 
// 1. Change character cards
// 1.1 Kickass star background and Star Wars logo
// 2. Change page layout
// 3. Make math work

var game = {

	"characters" : {
		"rey" : {
			"hp" : 500,
			"baseAttack" : 11,
			"counterAttack" : 22,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,w_262/v1480656870/Screenshot_2016-12-02_00.29.52_djosh9.png"
		},
		"vader" : {
			"hp" : 600,
			"baseAttack" : 16,
			"counterAttack" : 50,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,w_262/v1480656870/Screenshot_2016-12-02_00.30.33_ypcqjg.png"
		},
		"phasma" : {
			"hp" : 400,
			"baseAttack" : 7,
			"counterAttack" : 10,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/c_crop,h_365,w_262/v1480656870/Screenshot_2016-12-02_00.30.13_na24s9.png"
		},
		"chewie" : {
			"hp" : 700,
			"baseAttack" : 13,
			"counterAttack" : 31,
			"image": "http://res.cloudinary.com/stephenrwoosley/image/upload/v1480656870/Screenshot_2016-12-02_00.31.35_g4rcmx.png"
		}
	},

	populatePanels: function(character) {
		$(".character-choice-panel").css({ "display": "none" });
		$("#enemy-div").css("width", "75%");
		$("#instructions").css("display", "block").text("Click an enemy to begin fighting!");
		switch(character) {
			case "rey":
				$("#opponentDivOne").html("<img src="+game.characters.vader.image+">")
				$("#opponentDivTwo").html("<img src="+game.characters.chewie.image+">")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+">")
				console.log("rey chosen and switch statement completed")
				break;
			case "vader":
				$("#opponentDivOne").html("<img src="+game.characters.rey.image+">")
				$("#opponentDivTwo").html("<img src="+game.characters.chewie.image+">")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+">")
				console.log("vader chosen and switch statement completed")
				break;
			case "chewie":
				$("#opponentDivOne").html("<img src="+game.characters.vader.image+">")
				$("#opponentDivTwo").html("<img src="+game.characters.rey.image+">")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+">")
				console.log("chewie chosen and switch statement completed")
				break;
			case "phasma":
				$("#opponentDivOne").html("<img src="+game.characters.rey.image+">")
				$("#opponentDivTwo").html("<img src="+game.characters.vader.image+">")
				$("#opponentDivThree").html("<img src="+game.characters.chewie.image+">")
				console.log("phasma chosen and switch statement completed")
		}
	}, // end populatePanels()

	chooseEnemyToFight: function() {
		// when an enemy is clicked, their photo moves to arena

	},

	attackClicked: function(fighter, opponent) {
		// when attack button clicked
		// Opponent HP are decreased by Fighter baseAttack power amount
		// Display Opponent HP
		// BaseAttack power goes up by baseAttack number
		// Fighter HP are decreased by opponent counterAttack power
		// Display fighter HP
		// If Fighter HP are < 1, YOU LOOOOSE
		// If Defender HP are <1, if wins >2, YOU WIN. Else if <2, wait for another opponent to be clicked

		console.log("Attack button has been clicked");
		this.characters.fighter.baseAttack += this.characters.fighter.baseAttack;
		var fighterNamePrefix = "\"#"+fighter+"EnemyImg\""
		// $(fighterNamePrefix).
	}	
};


var fighter = "";
var opponent = "";
var fighterHP = 0;
var opponentHP = 0;
var fighterAttackPwr = 0;
var opponentCounterPwr = 0;


$(document).ready(function(){

	//if rey is chosen as the fighter
	$("#choose-rey").on("click", function(){
		game.populatePanels("rey");
		$("#chosen-fighter").html("<img id='reyFighterImg' src=" + game.characters.rey.image + ">");
		fighter = "rey";
		fighterHP = game.characters.rey.hp;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-vader").on("click", function(){
		game.populatePanels("vader");
		$("#chosen-fighter").html("<img id='vaderFighterImg' src=" + game.characters.vader.image + ">");
		fighter = "vader";
		fighterHP = game.characters.vader.hp;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-chewie").on("click", function(){
		game.populatePanels("chewie");
		$("#chosen-fighter").html("<img id='chewieFighterImg' src=" + game.characters.chewie.image + ">");
		fighter = "chewie";
		fighterHP = game.characters.chewie.hp;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-phasma").on("click", function(){
		game.populatePanels("phasma");
		$("#chosen-fighter").html("<img id='phasmaFighterImg' src=" + game.characters.phasma.image + ">");
		fighter = "phasma";
		fighterHP = game.characters.phasma.hp;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	//when the first opponent is chosen as the current opponent
	$("#opponentDivOne").on("click", function(){
		$(".arena").show();
		$("#opponentDivOne").css("display", "none");
		switch (fighter) {
			case "rey":
				//vader chewie phasma
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
				$(".hp").html("HP = " + game.characters.vader.hp)
				break;
			case "vader":
				//rey chewie phasma
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$(".hp").html("HP = " + game.characters.rey.hp)
				break;
			case "chewie":
				//rey vader phasma
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$(".hp").html("HP = " + game.characters.rey.hp)
				break;
			case "phasma":
				//rey vader chewie
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$(".hp").html("HP = " + game.characters.rey.hp)
		}
	});
	$("#opponentDivTwo").on("click", function(){
		$(".arena").show();
		$("#opponentDivTwo").css("display", "none");
		switch (fighter) {
			case "rey":
				//vader chewie phasma
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">")
				break;
			case "vader":
				//rey chewie phasma
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">")
				break;
			case "chewie":
				//rey vader phasma
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
				break;
			case "phasma":
				//rey vader chewie
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
		}
	});
	$("#opponentDivThree").on("click", function(){
		$(".arena").show();
		$("#opponentDivThree").css("display", "none");
		switch (fighter) {
			case "rey":
				//vader chewie phasma
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				break;
			case "vader":
				//rey chewie phasma
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				break;
			case "chewie":
				//rey vader phasma
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				break;
			case "phasma":
				//rey vader chewie
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">")
		}
	});


	// $("#attackButton").on("click", attackClicked())

});

