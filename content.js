$('body').append("<div id=\"tooltip\" style=\"display :none;\">\
	<div><span><i class=\"fa fa-close\" id=\"tooltip-icon\"></i></span></div>\
	<div id=\"tooltip-body\"></div><hr>\
	<div id=\"tooltip-button\"class=\"tooltip-group\"><i class=\"fa fa-angle-left\"></i><i class=\"fa fa-angle-right\"></i></div>\
	</div>");



//add the faslink

var link = document.createElement( "link" );
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );


chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

	if(request.todo == "display meaning"){
		var list = []
		for(var i =0;i<request.wordData.length;i++){
			//console.log(request.wordData[i]);
			for(var type in request.wordData[i].meaning){
				//console.log(request.wordData[i].meaning[type]);
				for(var j=0;j<request.wordData[i].meaning[type].length;j++){
					var object = {
						"word" : request.wordData[i].word,
						"example":request.wordData[i].meaning[type][j].example,
						"definition":request.wordData[i].meaning[type][j].definition,
						"type": type,
						"synonyms":request.wordData[i].meaning[type][j].synonyms,
					}

					//console.log(object);
					list.push(object);
				}
				
			}
		}
		//console.log(list)
		var stringList = [];
		
		for(var i=0;i<list.length;i++){
			var string = "";
			string  += "<div id=\"tooltip-title\" class=\"tooltip-group\"><span>"+ list[i].word +"</span><span><i class=\"fa fa-microphone\"></i></span></div><hr>\
			<div id=\"tooltip-type\" class=\"tooltip-group\"><span>"+list[i].type + "</span></div>";
			if(list[i].definition != undefined)
			string += "<div id=\"tooltip-defination\" class=\"tooltip-group\"><span>definition: </span>"+list[i].definition+"</div>";
			if(list[i].example != undefined)
			string += "<div id=\"tooltip-example\" class=\"tooltip-group\"><span>example: </span>"+list[i].example+"</div>";

			if(list[i].synonyms !=  undefined ){
				string+="<div id=\"tooltip-synonyms\" class=\"tooltip-group\"><span>synonyms:</span>";
				//console.log(list[i])
				
				for(var j=0;j<list[i].synonyms.length;j++){
					string+=list[i].synonyms[j]+",";
					if(j%2){
						string+="\n";
					}
				}
				string+="</div>";
			}
		
		
		
		stringList.push(string);
		}
		var i =0;
		$('#tooltip').css({"display":"block"});
		$("#tooltip-body").html(stringList[i]);
		//add eventListeners 
		$("#tooltip-icon").click(function(){
			$('#tooltip').css({"display":"none"});
		});

		$(".fa-microphone").click(function(){
			chrome.tts.speak(list[i].word,{'rate':0.8});
		});

		$(".fa-angle-right").click(function(){
			i++;
			if(i>=stringList.length){
				i=0;
			}
			$("#tooltip-body").html(stringList[i]);
			$(".fa-microphone").click(function(){
				chrome.tts.speak(list[i].word,{'rate':0.8});
			});

		});

		$(".fa-angle-left").click(function(){
			i--;
			if(i<0){
				i=stringList.length-1;
			}
			$("#tooltip-body").html(stringList[i]);
			$(".fa-microphone").click(function(){
				chrome.tts.speak(list[i].word,{'rate':0.8});
			});

		});

	}
});