var color = ["Red","Green","Blue"];
//Array Display
console.log("Test_1: ",color);
//Display size of the array
console.log("Size of array: ", color.length);
//Add elements in the array
var newColor = color.push("Black","White");
//Display size of array after adding elements
console.log("Test_2: Size of array now = ", newColor);
//Dispaly new array
console.log("New array: ",color);
//Display reverse array
var newColor = color.reverse();
console.log("Revers order: ",color);
//Removing the first elements from the array
var newColor = color.shift();
console.log("1st element deleted: ",color);
//Add new arrays before
var newColor = color.unshift("Yellow","Violate")
console.log("Add array before the array: ",color);
//Pushing new element
var newColor = color.push("Pink");
console.log("Push: ",color);
//Poping element
var newColor = color.pop();
console.log("Pop: ",color);
//Delete elements from any position of the array
var newColor = color.splice(1,2);
console.log("Splice (Deleting): ",color);
//Copy the array
var newColor = color.slice();
console.log("Copied array: ",color);
//Searching array from n'th position
var newColor = color.indexOf("Red",0);
console.log("Searched element is : ",color[newColor]);
console.log("Position is : ",newColor);
//Join arrays
var newColor = color.join(" & ");
console.log("Joined array: ",newColor);