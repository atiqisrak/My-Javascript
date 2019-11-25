alert("It's a zombie game where you have to choose a wepon that you will use to kill the zombies");
var weapon = prompt("Choose a weapon from : Axe,Gun,Granade");
alert("You have choosen "+ weapon + "as your weapon. Let's begin");
var kill = Math.round(Math.random());
if(kill == 0)
{
    alert("You win!");
}
else if(kill==1)
{
    alert("You loose");
}
else
{
    alert("Reload");
}