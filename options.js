$("#save-btn").click(function(){
	var language = $("input[name='language']:checked").val();
	chrome.storage.sync.get('lan', function(o){

			chrome.storage.sync.set({lan :language });
			close();
	});
});