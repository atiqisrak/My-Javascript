/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var a = "Congratulations! ";
var b = "You are right.";
var c = "Dhaka";
var d = "Sorry!";
var e = "You are wrong"+"Try again";
var answer = prompt("What's the capital of Bangladesh?");
if(answer==c)
{
    alert(a+b);
}
else if(answer == "dhaka")
{
    alert("You are right but try the first letter in uppercase.");
}
else
{
    alert(d+e);
}