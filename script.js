//you need to add JQUERY

  // src="https://code.jquery.com/jquery-3.2.1.min.js"
  // integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  // crossorigin="anonymous">
//play button, on click function - put everything within this function
var userScore = 0;
	//generate random values for each crystal value (between 1-12)
	var crystalValueRed = Math.floor((Math.random() * 12) + 1);
	var crystalValueBlue = Math.floor((Math.random() * 12) + 1);
	var crystalValueGreen =  Math.floor((Math.random() * 12) + 1);
	var crystalValueWhite = Math.floor((Math.random() * 12) + 1);
	//generate a target number (between 50-120)
	var targetNum = Math.floor((Math.random() * 120) + 50);
	$("#tar").text("Current Target Number: " + targetNum)

	//declare and display variable for target number
	//set user number  = to 0
	var userNumber = 0;
	//onClick function for each crystal to add crystal value to user number

	//red crystal on Click function
	$("#red").on("click", function(){
		userNumber = userNumber + crystalValueRed;
		console.log("red " + crystalValueRed);
		$("#currNum").text("Your current Number: " + userNumber);
		//change user number on div
				if (userNumber > targetNum) {
				alert("sorry, you've lost ");
				userScore--;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else if (userNumber == targetNum) {
				alert("you win!");
				userScore++;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else{
				}
	});

	//blue crystal on Click function
	$("#blue").on("click", function(){
		userNumber = userNumber + crystalValueBlue;
		console.log("blue " +crystalValueBlue);
		$("#currNum").text("Your current Number: " + userNumber);
		//change user number on div
				if (userNumber > targetNum) {
				alert("sorry, you've lost ");
				userScore--;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else if (userNumber == targetNum) {
				alert("you win!");
				userScore++;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else{
					}
	});

	//Green Crystal on click function
	$("#green").on("click", function(){
		userNumber = userNumber + crystalValueGreen;
		console.log("green " + crystalValueGreen);
		$("#currNum").text("Your current Number: " + userNumber);
		//change user number on div
				if (userNumber > targetNum) {
				alert("sorry, you've lost ");
				userScore--;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else if (userNumber == targetNum) {
				alert("you win!");
				userScore++;
				$("#userScoreDiv").text("Your current Score "+userScore);
				}
				else{
				}
	});
	//White Crystal on Click function
	$("#white").on("click", function(){
		userNumber = userNumber + crystalValueWhite;
		console.log("white "+ crystalValueWhite);
		$("#currNum").text("Your current Number: " + userNumber);
		//change user number on div
					if (userNumber > targetNum) {
					alert("sorry, you've lost ");
					userScore--;
					$("#userScoreDiv").text("Your current Score "+userScore);
					}
					else if (userNumber == targetNum) {
					alert("you win!");
					userScore++;
					$("#userScoreDiv").text("Your current Score "+userScore);
					}
					else{
					}
	});
$("#playBTN").on("click", function(){
	console.log("reset button clicked");
	 crystalValueRed = Math.floor((Math.random() * 12) + 1);
	 crystalValueBlue = Math.floor((Math.random() * 12) + 1);
	 crystalValueGreen =  Math.floor((Math.random() * 12) + 1);
	 crystalValueWhite = Math.floor((Math.random() * 12) + 1);
	 targetNum = Math.floor((Math.random() * 120) + 50);
	$("#tar").text("Current Target Number: " + targetNum)
	 userNumber = 0;
	$("#currNum").text("Your current Number: " + userNumber);
});