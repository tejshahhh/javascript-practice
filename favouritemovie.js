const favMovie = "Avengers";

let guess = prompt("Guess my favourite movie");

while((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong Guess. Please try again");
}

if(guess == favMovie) {
    console.log("Congrats!!");
}
else{
    console.log("You Quit");
}