var inquirer = require("inquirer");

inquirer.prompt([
{
	name: "game",
	type: "list",
	message: "Which flashcard stack would you like to play?",
	choices: ["Basic", "Cloze"]
}
]).then(function(res) {
	console.log(res.game);
	switch (res.game) {
		case "Basic":
			BasicCard();
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


//Cloze
var presidentCC = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var sloganCC = new ClozeCard("The slogan \"Just Do It\" was created in 1988 for Nike.", "Nike");
var hockeyCC = new ClozeCard("Wayne Gretzky scored a record 10 hat tricks in an NHL season.", "Wayne Gretzky");