$("#gif-portal").on("click", function() {
    var apikey = "&api_key=zXesKMJjcJyLGyXZLXDS1un9SLAT2hTm&limit=5"
    var searchResults = $("#search").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchResults + apikey;

    $.ajax({
        url: queryURL,
        method: "GET"
})
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");

            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(gifImage);

            $("#gifDiv").prepend(gifImage);
        }
    });
});