

var correctAnswer;
var theQuestion;
var theWord;
var theGIF;

function getQuestions(){

	console.log("About to get questions");

	//make ajax request
	$.ajax({
		url: "https://opentdb.com/api.php?amount=1&category=9&type=boolean",
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo 2!");
			theQuestion = data.results[0].question;
			document.getElementById("d").innerHTML = theQuestion;
			console.log(theQuestion);
			correctAnswer = data.results[0].correct_answer;
			//console.log(correctAnswer)
			x = findLongestWord(theQuestion);
			getGIF();
		}
	});

}

getQuestions();



$("#trueButton").click(function(){
	console.log("true is clicked!");
	if (correctAnswer === "True"){
		console.log("correct!");
		document.getElementById("giphy").src = "https://media0.giphy.com/media/l1J3yWTF9Vgr1X3j2/giphy.gif"
	}
	else {
		console.log("wrong!!!!!!");
		document.getElementById("giphy").src = "https://media2.giphy.com/media/hPPx8yk3Bmqys/giphy-downsized-medium.gif"


		
	}
});


$("#falseButton").click(function(){
	console.log("false is clicked!");
	if (correctAnswer === "False"){
		console.log("correct!");
		document.getElementById("giphy").src = "https://media0.giphy.com/media/l1J3yWTF9Vgr1X3j2/giphy.gif"
	}
	else {
		console.log("wrong!!!!!!");
		document.getElementById("giphy").src = "https://media2.giphy.com/media/hPPx8yk3Bmqys/giphy-downsized-medium.gif"
	}	
});

$("#anotherButton").click(function(){
	console.log("Another is clicked!");
	getQuestions();	

	
});


// This website helped me with figuring out how to find the longest word: goo.gl/Yddcnd
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  for(var i = 0; i < strSplit.length; i++){
  	if(strSplit[i].length === longestWord){
  		console.log(strSplit[i])
  		theWord = strSplit[i];
  		console.log(theWord);
  	}

}
}


//getting the gif

function getGIF(){

	console.log("About to get GIF");

	//make ajax request
	$.ajax({
		key:"",
		url: "http://api.giphy.com/v1/gifs/search?q=" + theWord + ".&api_key=bC0gL9QFD5zIn0gNbMiuEPpDdPdZFrvN&limit=20",
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
			document.getElementById("giphy").src = "https://media0.giphy.com/media/IPbS5R4fSUl5S/giphy.gif";

		},
		success: function(data){
			console.log("WooHoo 4!");
			try {
				theGIF = data.data[0].images.downsized_medium.url
				document.getElementById("giphy").src = theGIF;
				console.log(theGIF)

			}
			catch {
				document.getElementById("giphy").src = "https://media0.giphy.com/media/IPbS5R4fSUl5S/giphy.gif";

			}
			

			
		}
 
	});


}


