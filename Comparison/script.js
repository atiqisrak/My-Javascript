//if-else
var x = prompt('What\'s your age?');

if(x <13){
    console.log('You are a child.');
}
else if(x>13 && x<20){
    alert('You are a teen.');
}
else {
    console.log('You are an adult.');
}

//Ternary Operation

var y = prompt('What\'s your profession?');


    y = 'student' ? console.log('Find a job.') : console.log('Congratulations!!');
/* */

//Case operations
var b = 'black';
var z = prompt('What\'s your favourite color?');

    switch (z) {
        case 'red':
            console.log('Red is the color of blood.');
            break;

        case 'green':
            console.log('Green is the color of environment.');
            break;

        case 'blue':
            console.log('Blue is also my favourite.');
            break;

        default:
            console.log('Baal.');
    }
