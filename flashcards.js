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
				presidentBC.print();
				break;
			case "2":
				sloganBC.print();
				break;
			case "3":
				hockeyBC.print();
				break;
		}
	});
}
var presidentBC = new BasicCard("Who was the first president of the United States?", "George Washington");
var sloganBC = new BasicCard("The slogan \"Just Do It\" was created in 1988 for which company?", "Nike");
var hockeyBC = new BasicCard("Who scored a record 10 hat tricks in an NHL season?", "Wayne Gretzky");

//Cloze
var presidentCC = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var sloganCC = new ClozeCard("The slogan \"Just Do It\" was created in 1988 for Nike.", "Nike");
var hockeyCC = new ClozeCard("Wayne Gretzky scored a record 10 hat tricks in an NHL season.", "Wayne Gretzky");