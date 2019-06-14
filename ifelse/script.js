'use strict'  // новый стандарт ES6

let num = 50;

if (num < 49) {
    console.log('Неверно');
} else if (num > 100) {
    console.log('Много');
} else if (num == 50) {
    console.log('Верно');
} else {
    console.log('Шо');
}


(num == 50) ? console.log('верно') : console.log('не Верно');

switch (num) {
    case num < 49: 
        console.log('Неверно');
        break;
    case num >100: 
        console.log('Много');
        break;
    case  50: 
        console.log('Верно');
        break; 
} 


// while (num < 55) {
//     console.log(num);
//     num++;
// }


// что то сделать а потом проверить условие do while
do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}