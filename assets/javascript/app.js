//this is a lot like the in class activity and some of the code will look a lot like it
//it is pronounced "gif" like the peanut butter brand JIF ;)
//when the button is pressed function

//function to pre-populate the buttons source: https://stackoverflow.com/questions/18226598/how-to-add-a-button-dynamically-using-jquery
function addButtons() {
    let $catInput = $("<button random-shtuff='cats' type = 'button' class='btn btn-info'> Cats </button> ");
    $catInput.appendTo(("header"));
    let $puppyInput = $("<button random-shtuff='puppy' type = 'button' class='btn btn-info'> Puppies </button> ");
    $puppyInput.appendTo(("header"));
    let $kittenInput = $("<button random-shtuff='kittens' type = 'button' class='btn btn-info'> Kittens </button> ");
    $kittenInput.appendTo(("header"));
    let $chocolateInput = $("<button random-shtuff='chocolate' type = 'button' class='btn btn-info'> Chocolate </button> ");
    $chocolateInput.appendTo(("header"));
    let $cheeseInput = $("<button random-shtuff='cheese' type = 'button' class='btn btn-info'> Cheese </button> ");
    $cheeseInput.appendTo(("header"));
    let $lionInput = $("<button random-shtuff='lion' type = 'button' class='btn btn-info'> Lion </button> ");
    $lionInput.appendTo(("header"));
    let $pumpkinInput = $("<button random-shtuff='pumpkin' type = 'button' class='btn btn-info'> Pumpkin </button> ");
    $pumpkinInput.appendTo(("header"));
    let $appleInput = $("<button random-shtuff='apple' type = 'button' class='btn btn-info'> Apple </button> ");
    $appleInput.appendTo(("header"));
    let $beerInput = $("<button random-shtuff='beer' type = 'button' class='btn btn-info'> Beer </button> ");
    $beerInput.appendTo(("header"));
};
addButtons();

function clearGifs() {
    //if another button is clicked then the previous buttons should clear
}


$("button").on("click", function(){
 //defining the button being clicked at the top
 let gifSubject = $(this).attr("random-shtuff");

 //defining the URL I am querying using my own API key, the button referral from the HTML, ten results limit
 //"random-shtuff" is what I am calling my buttons because I did not have a specific theme
 let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
 gifSubject + "&api_key=YvIPVJfdVoqpfFqTghWIjsoMK19EoSfc&limit=10";

 //the AJAX stuff should go here - get method to get the gifs
 $.ajax({
    url: queryURL,
    method: "GET"
 })
 //then function after GET
.then(function(response) {
    let results = response.data;
//borrowing for loop from class activity
    for (let i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            let gifDiv = $("<div>");
            let rating = results[i].rating;
            let p = $("<div>").text("Rating " +  rating);
            let gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $("#gifs-go-here").prepend(gifDiv);

        }
    }
})
})

//THEN when another button is clicked it clears away the previous query

//PART TWO:
//use the giphy API to call on relevant gifs that will appear on the screen after the user enters the search term
//display 10 images per button from the giphy api

//PART THREE:
//when gif is clicked it animates