var number1 = Math.floor((Math.random() * 6)+1)
var number2 = Math.floor((Math.random() * 6)+1)
document.querySelector(".img1").setAttribute("src", "images/dice"+ number1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ number2 + ".png");

if (number1 > number2){
document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (number1 < number2){
document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
document.querySelector("h1").innerHTML = "Raund Draw";
}
