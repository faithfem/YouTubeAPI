(function() {
	("form").on("submit", function(e) {
		e.preventDefault();
		//prepare the request
		var request = global api.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
			maxResults: 3,
			order: "viewCount",
		});
		request.execute(function(response) {
			var results = response.result;
			$.each(results.items, function(index, item) {
				$.get("tpl/item.html", function(data) {
					$("#results").append(data);
				});
				//$("#results").append(item,id.videoId+" "+item.snippet.title+"<br");
			});
		});
	});
});

function init() {
	gapi.client.setApiKey("AIzaSyD_nCjpXkJ3KPfgcbetW5Ckrf2FWDt5Bg8");
	gapi.client.load("youtube", "v3", function() {});
}