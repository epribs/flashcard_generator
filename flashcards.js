var fcObj = require("./flashcardBank");


var inquirer = require("inquirer");

inquirer.prompt([
{
	name: "game",
	type: "list",
	message: "Which flashcard stack would you like to play?",
	choices: ["Basic", "Cloze"]
}
]).then(function(res) {
	switch (res.game) {
		case "Basic":
		 	basic();
			break;
		case "Cloze":
			// ClozeCard();
			break;
	}
});

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.print = function() {
		console.log(front);
		console.log(back);
		console.log("-------------");
	}
}

function ClozeCard(full, part) {
	this.full = full;
	this.part = part;
	this.print = function() {
		console.log(full);
		console.log(part);
		console.log("-------------");
	}
}

//Basic

function basic() {
	inquirer.prompt([
	{
		name: "cards",
		type: "list",
		message: "Select a card",
		choices: ["1", "2", "3"]
	}
	]).then(function(res) {
		switch (res.cards) {
			case "1": 
				basicArr[0].print();
				break;
			case "2":
				basicArr[1].print();
				break;
			case "3":
				basicArr[2].print();
				break;
		}
	});
}

var basicArr = [];
for (var i = 0; i < fcObj.length; i++) {
	if (fcObj[i].basic) {
		for (var j = 0; j < fcObj[i].basic.length; j++) {
			basicArr.push(new BasicCard(fcObj[i].basic[j].front, fcObj[i].basic[j].back));
		}
	}
}



//Cloze
var presidentCC = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var sloganCC = new ClozeCard("The slogan \"Just Do It\" was created in 1988 for Nike.", "Nike");
var hockeyCC = new ClozeCard("Wayne Gretzky scored a record 10 hat tricks in an NHL season.", "Wayne Gretzky");