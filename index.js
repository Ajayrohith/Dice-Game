
var number= Math.floor(Math.random()*6)+1;
var imageno= "images/dice"+number+".png";
document.getElementsByClassName("pl1")[0].setAttribute("src",imageno);

var number1= Math.floor(Math.random()*6)+1;
var imageno1= "images/dice"+number1+".png";
document.getElementsByClassName("pl2")[0].setAttribute("src",imageno1);


if(number>number1)
{
    document.querySelector("span").innerHTML="team 1";
}

else if(number<number1)
{
    document.querySelector("span").innerHTML="team2";
}
else 
{
    document.querySelector("span").innerHTML="tie";
}
