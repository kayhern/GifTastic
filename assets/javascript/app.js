//this is a lot like the in class activity and some of the code will look a lot like it
//it is pronounced "gif" like the peanut butter brand JIF ;)

//PART ONE:
//incorporate giphy API: my key is YvIPVJfdVoqpfFqTghWIjsoMK19EoSfc
$(document).ready(function(){

    let gifSubject = $(this).attr("random-shtuff");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    random-shtuff + "&api_key=YvIPVJfdVoqpfFqTghWIjsoMK19EoSfc&limit=10";




});
//pre-populated ten buttons that call giphy API:
//1cat button
//2pikachu button
//3puppy button
//4kitten button
//5chocolate button
//6cheese button
//7lion button
//8pumpkin
//9apple
//10beer
//FIRST call API, THEN make the on click button event that triggers the 10 pictures to populate
//THEN when another button is clicked it clears away the previous query

//PART TWO:
//use the giphy API to call on relevant gifs that will appear on the screen after the user enters the search term
//display 10 images per button from the giphy api

//PART THREE:
//when gif is clicked it animates