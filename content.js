





chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	console.log("here");
	if(request.todo == "display meaning"){
		// var color = '#'+request.clickedColor;
		console.log("changing");
		$('p').css('color', 'blue' );
		console.log(request.wordData);
	}
});