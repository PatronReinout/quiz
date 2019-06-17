var questions = [
	//array van alle vragen
	{
		prompt:
			"wie is de leukste docent in semester 2? Geert-jan(a)  Erik Heijligers(b) Joris Ariën(c)",
		answer: "a"
	},
	{
		prompt:
			"welke kleur is een tomaat? Zilver(a) Rood(b) zwarter dan de nacht(c)",
		answer: "c"
	},
	{
		prompt: "Wanneer is bob marley? Hij leeft(a) 1981(b) 1997(c)",
		answer: "b"
	},
	{
		prompt:
			"Wat is het populariteitscijfer van Donald Trump? 12%(a) 37%(b) 42%(c)",
		answer: "c"
	},
	{
		prompt:
			"wat is de market cap van alle cryptocurrencys $285.835.073.226(a) $324.835.073.226(b) $745.835.073.226%(c)",
		answer: "a"
	}
];
var score = 0; //je score wanneer je begint

for (var i = 0; i < questions.length; i++) {
	//for loop gaat net zo lang tot het einde van de array
	var response = window.prompt(questions[i].prompt); //opent een prompt waar je een antwoord kan invoegen
	if (response == questions[i].answer) {
		//controleert of het antwoord goed is
		score++; //als het antwoord goed is krijg je een punt
		alert("Correct!");
	} else {
		alert("WRONG!");
	}
}
alert("you got " + score + "/" + questions.length); //je krijgt een alert met welke score je hebt
