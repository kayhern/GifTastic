//this is a lot like the in class activity and some of the code will look a lot like it
//it is pronounced "gif" like the peanut butter brand JIF ;)

$(document).ready(function(){

//when the button is pressed function

$("button").on("click", function(){
 //defining the button being clicked at the top
 let gifSubject = $(this).attr("random-shtuff");

 //defining the URL I am querying using my own API key, the button referral from the HTML, ten results limit
 //"random-shtuff" is what I am calling my buttons because I did not have a specific theme
 let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
 random-shtuff + "&api_key=YvIPVJfdVoqpfFqTghWIjsoMK19EoSfc&limit=10";

 //the AJAX stuff should go here




})
   

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