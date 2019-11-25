var MarkH,MarkW,JohnH, JohnW;

MarkH = prompt('What is the Height of Mark (KG)?');
MarkW = prompt('What is the Weight of Mark (cm)?');
JohnH = prompt('What is the Height of John? (KG)');
JohnW = prompt('What is the Weight of John? (cm)');


var MarkBMI = MarkW/(MarkH*MarkH);
var JohnBMI = JohnW/(JohnH*JohnH);

alert('BMI of Mark = '+MarkBMI);
alert('BMI of John = '+JohnBMI);

console.log('Is Mark\'s BMI higher than John\'s BMI? ');
console.log(MarkBMI>JohnBMI);
