var menuItem = {
	"id" : "genius",
	"title": "genius",
	"contexts":["selection"]
};

chrome.contextMenus.create(menuItem);



chrome.contextMenus.onClicked.addListener(function(clickedData){
	if(clickedData.menuItemId == "genius" && clickedData.selectionText){
		//chrome.tts.speak(clickedData.selectionText,{'rate':0.8});
		 var url = "https://googledictionaryapi.eu-gb.mybluemix.net/?define=";
		 url += escape(clickedData.selectionText);
		 url+= "&lang=en";
		 console.log(url);
		 $.get(url, function (data, status) {
		        console.log(data);
		        chrome.tabs.query({active : true,currentWindow : true}, function(tabs){
		        	console.log(tabs);
		        	chrome.tabs.sendMessage(tabs[0].id, {todo: "display meaning", wordData:data});
		        });
		    });
	}
});