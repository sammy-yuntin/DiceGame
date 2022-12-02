var dice1 = Math.floor(Math.random() * 6) + 1;

var dice1img = "./images/" + "dice" + dice1 + ".png";

document.querySelector(".img1").setAttribute("src", dice1img);

var dice2 = Math.floor(Math.random() * 6) + 1;

var dice2img = "./images/" + "dice" + dice2 + ".png";

document.querySelector(".img2").setAttribute("src", dice2img);

if( dice1 > dice2  ){

    document.getElementsByTagName("h1")[0].innerHTML= " PLAYER 1 WINS"
} else if(dice1 < dice2)
{
    document.getElementsByTagName("h1")[0].innerHTML= " PLAYER 2 WINS" 
} else {
    document.getElementsByTagName("h1")[0].innerHTML= " ITS A NO-WINNER GAME"
}