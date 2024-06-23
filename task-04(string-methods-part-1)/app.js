//task1
function dna(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            result += 'T';
        } else if (str[i] === 'T') {
            result += 'A';
        } else if (str[i] === 'C') {
            result += 'G';
        } else if (str[i] === 'G') {
            result += 'C';
        }
    }
    return result;
}
console.log(dna('ATTGC'));
console.log(dna('GTAT'));
//task2
function character(str) {
    for (let i = 0; i < str.length; i++) {
        result = 'z'.repeat(str.length);  
    }
    return result;
}
console.log(character('abdsd'));
//task3
function getNumberFromString(num) {
    let result = '';
    for (let i = 0; i < num.length; i++) {
        if (!isNaN(num[i]) || num[i] === '') {
            result += num[i];
        }
    }
    return result;
}
console.log(getNumberFromString('hell5o wor6ld'));
//task5
function numhastext(str) {
    let result = '';
    let allNumber = false;

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) || str[i] === ' ') {
            result += str[i];
            allNumber = true;
        }
    }

    return allNumber ? result : ' ';
}
console.log(numhastext('! !'));
console.log(numhastext('This looks5 grea8t!'));
console.log(numhastext('123456789'));
//task6
function stringy(num) {
    return '01'.repeat(num)
}
console.log(stringy(5));
//task 7
function uppercase(text) {
   return text === text.toUpperCase()
}
console.log(uppercase('ACSKLDFJSgSKLDFJSKLDFJ'));
console.log(uppercase('ACSKLDFJSGSKLDFJSKLDFJ'));
//task8
function myFunction(number,str) {
    return str.repeat(number)
}
console.log(myFunction(6,'I'));
console.log(myFunction(2, "Hello"));
//task9
function rplace(text) {
    return text.split('').reverse().join('');
}
console.log(rplace('world'));
//task10
function spaceDelete(text) {
    let sp = String(text);
    return sp.split(' ').join('');
}
console.log(spaceDelete('8aaaaa dddd r    '));  