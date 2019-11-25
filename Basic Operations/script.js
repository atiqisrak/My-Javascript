var Niloy,Nabila, Tahsin,Luzaina,Guddu;

var currentYear = 2018;

Niloy = prompt('What is the age of Niloy? ');

Tahsin = Niloy-7; //age
Nabila = currentYear-(Tahsin-1); //year
Luzaina = Nabila+5; //year
Guddu = currentYear-Luzaina; //age

alert('This is '+currentYear
        +'\nNiloy is '+Niloy+' years old'
        + '\nTahsin is '+ Tahsin + ' years old'
        + '\nNabila birth year '+ Nabila
        + '\nLuzaina  birth year '+ Luzaina
        + '\nGuddu is '+Guddu + ' years old');

var taOlderGuddu = Tahsin > Guddu;
alert(taOlderGuddu);
alert(typeof taOlderGuddu);