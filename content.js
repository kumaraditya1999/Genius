$('body').append("<div id=\"tooltip\"></div>");


// var object = {
// 	"word" : word_analysis[i].word,
// 	"type" : type,
// 	"defination": word_analysis[i][type].defination,
// 	"example": word_analysis[i][type].example,
// 	"synonyms": word_analysis[i][type].synonyms
// }
// list.append(object);
// console.log(object);

$('body').append("<div id=\"tooltip\"></div>")



chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	console.log("here");
	if(request.todo == "display meaning"){
		// var color = '#'+request.clickedColor;
		// var word_analysis = request.wordData;
		// var list = []

		// for(var i=0;i<word_analysis.lenght;i++){
		// 	if(word_analysis[i].meaning.noun){
		// 		for(var j=0;j<word_analysis[i].meaning.noun.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "noun",
		// 				"defination": word_analysis[i].meaning.noun[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}

		// 	if(word_analysis[i].meaning.abbreviation){
		// 		for(var j=0;j<word_analysis[i].meaning.abbreviation.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "abbreviation",
		// 				"defination": word_analysis[i].meaning.abbreviation[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}

		// 	if(word_analysis[i].meaning.adjective){
		// 		for(var j=0;j<word_analysis[i].meaning.adjective.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "adjective",
		// 				"defination": word_analysis[i].meaning.adjective[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}

		// 	if(word_analysis[i].meaning.adjective){
		// 		for(var j=0;j<word_analysis[i].meaning.adjective.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "adjective",
		// 				"defination": word_analysis[i].meaning.adjective[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}

		// 	if(word_analysis[i].meaning.pronoun){
		// 		for(var j=0;j<word_analysis[i].meaning.pronoun.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "pronoun",
		// 				"defination": word_analysis[i].pronoun.adjective[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}

		// 	if(word_analysis[i].meaning.verb){
		// 		for(var j=0;j<word_analysis[i].meaning.verb.lenght;j++){
		// 			var object = {
		// 				"word" : word_analysis[i].word,
		// 				"type" : "verb",
		// 				"defination": word_analysis[i].verb.adjective[j].defination,
		// 			}
		// 			list.append(object);
		// 			console.log(object);
		// 		}
				
		// 	}




		// }
		var list = []
		for(var i =0;i<request.wordData.length;i++){
			//console.log(request.wordData[i]);
			for(var type in request.wordData[i].meaning){
				//console.log(request.wordData[i].meaning[type]);
				var object = {
					"word" : request.wordData[i].word,
					"example":request.wordData[i].meaning[type][0].example,
					"definition":request.wordData[i].meaning[type][0].definition,
					"type": type,
					"synonyms":request.wordData[i].meaning[type][0].synonyms,
				}

				//console.log(object);
				list.push(object);
			}
		}
		
		var stringList = [];
		
		for(var i=0;i<list.length;i++){
			var string = "";
			
		}

		console.log(list);
		console.log("changing");
		$('p').css('color', 'blue' );
		console.log($('body'));
		$('body').append("<p>yo bitch</p>")
		console.log("<p>yo bitch</p>");
	}
});