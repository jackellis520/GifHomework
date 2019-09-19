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
            // <img />
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.addClass("gif");
            // <img src="giphy.com/still" />
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animated", results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");
//console.log(gifImage);
            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");
          //      console.log(state);
                if (state === "still") {
                
                    $(this).attr("src", $(this).attr("data-animated"));
                    $(this).attr("data-state", "animate");
                } else {
                   
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still")
                }

            })



            gifDiv.append(gifImage);

            $("#gifDiv").prepend(gifImage);
        }

    });
});