var MRand = Math.round(Math.random()*5);
if(MRand%3==0 && MRand != 0)
{
    alert("Fizz");
}
else if(MRand%5==0 && MRand != 0)
{
    alert("buzz!");
}
else
{
    console.log(MRand);
}
