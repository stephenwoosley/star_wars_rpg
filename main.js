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

var fighter = "";
var opponent = "";
var fighterHP = 0;
var opponentHP = 0;
var fighterAttackPwr = 0;
var opponentCounterPwr = 0;
var winNumber = 0;

var game = {

	"characters" : {
		"rey" : {
			"hp" : 135,
			"baseAttack" : 9,
			"counterAttack" : 22,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,h_300,w_210/v1481089174/rey_ukakmx.jpg"
			//http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,w_262/v1480656870/Screenshot_2016-12-02_00.29.52_djosh9.png"
		},
		"vader" : {
			"hp" : 150,
			"baseAttack" : 11,
			"counterAttack" : 30,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,h_300,w_210/v1481089174/kylo_jtbdjj.jpg"
			//http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,w_262/v1480656870/Screenshot_2016-12-02_00.30.33_ypcqjg.png"
		},
		"phasma" : {
			"hp" : 100,
			"baseAttack" : 7,
			"counterAttack" : 10,
			"image" : "http://res.cloudinary.com/stephenrwoosley/image/upload/v1481089174/phasma_ckblle.jpg"
			//http://res.cloudinary.com/stephenrwoosley/image/upload/c_crop,h_365,w_262/v1480656870/Screenshot_2016-12-02_00.30.13_na24s9.png"
		},
		"chewie" : {
			"hp" : 180,
			"baseAttack" : 10,
			"counterAttack" : 31,
			"image": "http://res.cloudinary.com/stephenrwoosley/image/upload/c_scale,h_300,w_210/v1481089174/chewie_blcwit.jpg"
			//http://res.cloudinary.com/stephenrwoosley/image/upload/v1480656870/Screenshot_2016-12-02_00.31.35_g4rcmx.png"
		}
	},

	populatePanels: function(character) {
		$(".character-choice-panel").css({ "display": "none" });
		$("#enemy-div").show().css("width", "75%");
		$("#instructions").css("display", "block").text("Click an enemy to begin fighting!");
		switch(character) {
			case "rey":
				$("#opponentDivOne").html("<img src="+game.characters.vader.image+"><p class='hp'>HP=<span>150</span></p>")
				$("#opponentDivTwo").html("<img src="+game.characters.chewie.image+"><p class='hp'>HP=<span>180</span></p>")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+"><p class='hp'>HP=<span>100</span></p>")
				$("#fighter-hp").html(fighterHP);

				console.log("rey chosen and switch statement completed")
				break;
			case "vader":
				$("#opponentDivOne").html("<img src="+game.characters.rey.image+"><p class='hp'>HP=<span>135</span></p>")
				$("#opponentDivTwo").html("<img src="+game.characters.chewie.image+"><p class='hp'>HP=<span>180</span></p>")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+"><p class='hp'>HP=<span>100</span></p>")
				$("#fighter-hp").html(fighterHP);

				console.log("vader chosen and switch statement completed")
				break;
			case "chewie":
				$("#opponentDivTwo").html("<img src="+game.characters.vader.image+"><p class='hp'>HP=<span>150</span></p>")
				$("#opponentDivOne").html("<img src="+game.characters.rey.image+"><p class='hp'>HP=<span>135</span></p>")
				$("#opponentDivThree").html("<img src="+game.characters.phasma.image+"><p class='hp'>HP=<span>100</span></p>")
				$("#fighter-hp").html(fighterHP);				
				console.log("chewie chosen and switch statement completed")
				break;
			case "phasma":
				$("#opponentDivOne").html("<img src="+game.characters.rey.image+"><p class='hp'>HP=<span>135</span></p>")
				$("#opponentDivTwo").html("<img src="+game.characters.vader.image+"><p class='hp'>HP=<span>150</span></p>")
				$("#opponentDivThree").html("<img src="+game.characters.chewie.image+"><p class='hp'>HP=<span>180</span></p>")
				$("#fighter-hp").html(fighterHP);				
				console.log("phasma chosen and switch statement completed")
		}
	}, // end populatePanels()

	attackClicked: function() {
		// when attack button clicked
		console.log("Attack button has been clicked");
		// Opponent HP are decreased by Fighter baseAttack power amount
		opponentHP -= fighterAttackPwr;
		// BaseAttack power goes up by baseAttack number
		fighterAttackPwr += fighterAttackPwr;
		// Fighter HP are decreased by opponent counterAttack power
		fighterHP -= opponentCounterPwr;
		// Update page div's
		$("#opponent-hp").html(opponentHP);
		$("#fighter-hp").html(fighterHP);
		// If Fighter HP are < 1, YOU LOOOOSE
		if (fighterHP < 1){
			alert("YOU LOOOOSE");
			game.reset();
		}
		// IF Opponent HP is < 1, they disappear so you can choose a new enemy.
		else if (opponentHP < 1) {
			$(".arena").hide();
			$("#opponent-hp").html("");
			winNumber++;
			if(winNumber === 3){
				alert("THE FORCE IS STRONG WITH YOU!!!");
				game.reset();
			}
		}	
	},

	reset: function() {

		fighter = "";
		opponent = "";
		fighterHP = 0;
		opponentHP = 0;
		fighterAttackPwr = 0;
		opponentCounterPwr = 0;
		winNumber = 0;

		$(".character-choice-panel").show();
		$("#fighter-stance").html("");
		$("#opponent").html("");
		$("#fighter-hp").html("");
		$("#opponent-hp").html("");
		$("#chosen-fighter").html("");
		$("#opponentDivOne").show();
		$("#opponentDivTwo").show();
		$("#opponentDivThree").show();
		$("#arena").hide();
		$("#enemy-div").hide();
		$("#your-fighter").hide();
	}	
};


$(document).ready(function(){

	//if rey is chosen as the fighter
	$("#choose-rey").on("click", function(){
		game.populatePanels("rey");
		$("#your-fighter").show();
		$("#chosen-fighter").html("<img id='reyFighterImg' src=" + game.characters.rey.image + ">");
		fighter = "rey";
		fighterHP = game.characters.rey.hp;
		fighterAttackPwr = game.characters.rey.baseAttack;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-vader").on("click", function(){
		game.populatePanels("vader");
		$("#your-fighter").show();
		$("#chosen-fighter").html("<img id='vaderFighterImg' src=" + game.characters.vader.image + ">");
		fighter = "vader";
		fighterHP = game.characters.vader.hp;
		fighterAttackPwr = game.characters.vader.baseAttack;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-chewie").on("click", function(){
		game.populatePanels("chewie");
		$("#your-fighter").show();
		$("#chosen-fighter").html("<img id='chewieFighterImg' src=" + game.characters.chewie.image + ">");
		fighter = "chewie";
		fighterHP = game.characters.chewie.hp;
		fighterAttackPwr = game.characters.chewie.baseAttack;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	$("#choose-phasma").on("click", function(){
		game.populatePanels("phasma");
		$("#your-fighter").show();
		$("#chosen-fighter").html("<img id='phasmaFighterImg' src=" + game.characters.phasma.image + ">");
		fighter = "phasma";
		fighterHP = game.characters.phasma.hp;
		fighterAttackPwr = game.characters.phasma.baseAttack;
		console.log("Your fighter is " + fighter + " & this fighter starts with " + fighterHP + "HP.")
	});

	//when the first opponent is chosen as the current opponent
	$("#opponentDivOne").on("click", function(){
		$(".arena").show();
		$("#opponentDivOne").css("display", "none");
		switch (fighter) {
			case "rey":
				//vader chewie phasma
				$("#fighter-stance").html("<img src="+game.characters.rey.image+">");
				//$("#fighter-hp").html(game.characters.rey.hp);
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
				$("#opponent-hp").html(game.characters.vader.hp)
				break;
			case "vader":
				//rey chewie phasma
				$("#fighter-stance").html("<img src="+game.characters.vader.image+">");
				//$("#fighter-hp").html(game.characters.vader.hp);
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$("#opponent-hp").html(game.characters.rey.hp)
				break;
			case "chewie":
				//rey vader phasma
				$("#fighter-stance").html("<img src="+game.characters.chewie.image+">");
				//$("#fighter-hp").html(game.characters.chewie.hp);
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$("#opponent-hp").html(game.characters.rey.hp)
				break;
			case "phasma":
				//rey vader chewie
				$("#fighter-stance").html("<img src="+game.characters.phasma.image+">");
				//$("#fighter-hp").html(game.characters.phasma.hp);
				opponent = "rey";
				opponentHP = game.characters.rey.hp;
				opponentCounterPwr = game.characters.rey.counterAttack;
				$("#opponent").html("<img src="+game.characters.rey.image+">")
				$("#opponent-hp").html(game.characters.rey.hp)
		}
	});
	$("#opponentDivTwo").on("click", function(){
		$(".arena").show();
		$("#opponentDivTwo").css("display", "none");
		switch (fighter) {
			case "rey":
				$("#fighter-stance").html("<img src="+game.characters.rey.image+">");
				$("#fighter-hp").html(game.characters.rey.hp);
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">");
				$("#opponent-hp").html(game.characters.chewie.hp);
				break;
			case "vader":
				$("#fighter-stance").html("<img src="+game.characters.vader.image+">");
				$("#fighter-hp").html(game.characters.vader.hp);
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">")
				$("#opponent-hp").html(game.characters.chewie.hp);
				break;
			case "chewie":
				$("#fighter-stance").html("<img src="+game.characters.chewie.image+">");
				$("#fighter-hp").html(game.characters.chewie.hp);
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
				$("#opponent-hp").html(game.characters.vader.hp);
				break;
			case "phasma":
				$("#fighter-stance").html("<img src="+game.characters.phasma.image+">");
				$("#fighter-hp").html(game.characters.phasma.hp);
				opponent = "vader";
				opponentHP = game.characters.vader.hp;
				opponentCounterPwr = game.characters.vader.counterAttack;
				$("#opponent").html("<img src="+game.characters.vader.image+">")
				$("#opponent-hp").html(game.characters.vader.hp);
		}
	});
	$("#opponentDivThree").on("click", function(){
		$(".arena").show();
		$("#opponentDivThree").css("display", "none");
		switch (fighter) {
			case "rey":
				$("#fighter-stance").html("<img src="+game.characters.rey.image+">");
				$("#fighter-hp").html(game.characters.rey.hp);
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				$("#opponent-hp").html(game.characters.phasma.hp);
				break;
			case "vader":
				$("#fighter-stance").html("<img src="+game.characters.vader.image+">");
				$("#fighter-hp").html(game.characters.vader.hp);
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				$("#opponent-hp").html(game.characters.phasma.hp);
				break;
			case "chewie":
				$("#fighter-stance").html("<img src="+game.characters.chewie.image+">");
				$("#fighter-hp").html(game.characters.chewie.hp);
				opponent = "phasma";
				opponentHP = game.characters.phasma.hp;
				opponentCounterPwr = game.characters.phasma.counterAttack;
				$("#opponent").html("<img src="+game.characters.phasma.image+">")
				$("#opponent-hp").html(game.characters.phasma.hp);
				break;
			case "phasma":
				$("#fighter-stance").html("<img src="+game.characters.phasma.image+">");
				$("#fighter-hp").html(game.characters.phasma.hp);
				opponent = "chewie";
				opponentHP = game.characters.chewie.hp;
				opponentCounterPwr = game.characters.chewie.counterAttack;
				$("#opponent").html("<img src="+game.characters.chewie.image+">")
				$("#opponent-hp").html(game.characters.chewie.hp);
		}
	});

	$("#attack").on("click", function() {
		game.attackClicked();
	})


	// $("#attackButton").on("click", attackClicked())

});

