/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var answer = prompt("What's your favourite color among Red,Green,Blue?").toLowerCase();

switch(answer)
{
    case "red":
        alert("Red is your choise");
        break;
    case "green":
        alert("Green is the choise");
        break;
    case "blue":
        alert("Blue is the choise you made");
        break;
    default:
        alert("Choose a valid option");
        break;
}