var Rand=Math.round(Math.random()*15);
if(Rand%3==0 && Rand%5==0 && Rand!=0)
{
    alert("fizzbuzz");
}
else if(Rand%5==0 && Rand!=0)
{
    alert("buzz");
}
else if(Rand%3==0 && Rand!=0)
{
    alert("fizz");
}
else
{
    console.log(Rand);
}