//task 1
let text = "John Doe";
let result = "";

for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
        result += text[i];
    }
}
console.log('output:',result,'length:',result.length);
//task 2
let user ='Eltac Memedzade'

for (let i = 0; i < user.length; i++) {
    if (user[i] === ' ') {
        let userName =user.slice(0,i)
        let surName =user.slice(i)
        console.log(surName + ' ' + userName);
        break
    }
}
//task 3
function sixNum(num1,num2) {
    const sum =(num1*num2).toString()
   if (sum.length<6) {
    console.log("alinan hasilde en az 6 reqem olamlidir");
   } else {
    console.log(sum[5]);
   }
}
console.log(sixNum(16792,5437));
console.log(sixNum(12,5437));

//task 4
let nus ='530.90'.split('.')
console.log(nus[0],'manat',nus[1],'qəpik');
//task 5
const fullName ='Məmmədov Ramil Qurban'.split(' ')
console.log(fullName[0],fullName[1].split('')[0],fullName[2].split('')[0]);
//task 6



//task 7

let texth = "Mr. Blue has a blue house";
let position = texth.search('. ');
console.log(position);
//task8
function nums(word) {
    
    for (let i = 0; i < word.length; i++) {
    let num = '0123456789'.split('')
      if (num.includes(word[i])) {
        console.log('reqem var');
        return
      }
    }
    console.log('reqem yoxdur');    
}
console.log(nums('ccddddddd5'));
//task9
function repeatedSymbolCounter(string, char) {
    let resault = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            resault++;
        }
    }
    return resault;
}

console.log(repeatedSymbolCounter('success', 's')); 

//task10
function capitalize(str) {
    let dsd =String(str)
    let sd =dsd.slice(0,1).toLocaleUpperCase()
    console.log(sd + ''+dsd);
}
capitalize('dsd f')
//task11 
function snakeToKebab(str) {
    let sds =String(str)
    let dsfs =sds.toLocaleLowerCase()
    console.log(dsfs);
}
snakeToKebab("BU_TEST_UCUNDUR")
//task 12
function changeFirstWord(tets,tst) {
    let ds =String(tets)
    let sd =String(tst)
    let rp = ds.replace(ds,sd)
    let dsd =ds.slice(1)
    console.log(rp + '' + dsd);
}
changeFirstWord('Kamil','f')

//task13
function removeCharacterFromString(word) {
    let dsd =String(word)
    let ddd =dsd.slice(1)
    console.log(ddd);
}

removeCharacterFromString('Loremn ipsum dolar sit amet')
//task 14
function checkIsEmail(email) {
    let gm ="@email.com"
    let out ="@outlook.com"
    let mail="@mail.ru"
    let ya ="@yahoo.com"
    let yandex ="@yandex.com"
    if (email.includes(gm) || email.includes(out) || email.includes(mail) || email.includes(ya) || email.includes(yandex)) {
        return 'email tesdiq olundu'
    } else {
        return 'duzgun email formasi yazin'
    }
}
console.log(checkIsEmail('eltac@email.com'));//true
console.log(checkIsEmail('eltac@gmail.com'));//fasle
//tsk ,6