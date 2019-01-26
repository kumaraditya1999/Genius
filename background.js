var menuItem = {
	"id" : "genius",
	"title": "genius",
	"contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

$(document).ajaxError(function(e, xhr, settings, exception) {

	chrome.tabs.query({active : true,currentWindow : true}, function(tabs){

		chrome.tabs.sendMessage(tabs[0].id, {todo: "404 Error"});
	});

});	


chrome.contextMenus.onClicked.addListener(function(clickedData){
	if(clickedData.menuItemId == "genius" && clickedData.selectionText){
		//chrome.tts.speak(clickedData.selectionText,{'rate':0.8});
		chrome.storage.sync.get('lan', function(o){
			var url = "https://googledictionaryapi.eu-gb.mybluemix.net/?define=";
			url += escape(clickedData.selectionText);
			if(o.lan){
				url+="&lang="+o.lan;
			}else{
				url+= "&lang=en";	
			}
			

			$.get(url, function (data, status) {
			       chrome.tabs.query({active : true,currentWindow : true}, function(tabs){

			       	chrome.tabs.sendMessage(tabs[0].id, {todo: "display meaning", wordData:data});
			       });
			   });
		});
		 
	}
});