var j1 = prompt('John team point in first match: ');
var m1 = prompt('Mike team point in first match: ');

var j2 = prompt('John team point in second match: ');
var m2 = prompt('Mike team point in second match: ');

var j3 = prompt('John team point in third match: ');
var m3 = prompt('Mike team point in third match: ');

var jAvg = (j1+j2+j3)/3;
var mAvg = (m1+m2+m3)/3;

var result;

switch (result) {
    case (jAvg>mAvg):
        //if (jAvg>mAvg){
            console.log('John team wins with average point '+jAvg);
            break;
        //}
    case (jAvg<mAvg):
        //if(jAvg<mAvg){
            console.log('Mike team wins with average point '+mAvg);
            break;
        //}
    case (jAvg===mAvg):
        //if(jAvg===mAvg){
            console.log('Draw Match.');
            break;
        //}

}
/*
default:
console.log('Invalid values. Try again.'); */