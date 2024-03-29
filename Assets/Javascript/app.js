var gifName = ["orange", "red", "blue", "purple", "green"];
// loop through an array of gif names
// create a button for each name
// add buttons to the screen
// on.click ajax call
// method.push(add another element to the array)
function renderButton() {
    $("#button").empty();
    for (var i = 0; i < gifName.length; i++) {
        var button = $("<button>");
        button.addClass("gif-button");
        button.attr("data-name", gifName[i]);
        button.text(gifName[i]);
        $("#button").append(button);


        //   var buttonDiv = $("#button");
        //  buttonDiv.append(button);
    }
};
// pass the results.data into the function
// for loops, arrays, and function calls

$("#gif-portal").on("click", function () {
    event.preventDefault();
    var searchResults = $("#search").val().trim();
    gifName.push(searchResults);
    renderButton();

})

$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {

        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still")
    }

})

function ajax() {

    var apikey = "&api_key=zXesKMJjcJyLGyXZLXDS1un9SLAT2hTm&limit=5"
    var gifSearch = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + apikey;
console.log(gifSearch);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>");

                var gifImage = $("<img>");
                // <img />
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.addClass("gif");

                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                gifImage.attr("data-animated", results[i].images.fixed_height.url);
                gifImage.attr("data-state", "still");

                gifDiv.append(gifImage);

                $("#gifDiv").prepend(gifImage);
            };
        });
};
$(document).on("click", ".gif-button", ajax);
renderButton();