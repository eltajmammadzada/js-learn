//task1
function solution(str,str1) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str1[0] && str[i+1] === str1[1]) {
            return true
        }     
    }
    return false
}
console.log(solution('abc','bc'));
console.log(solution('ac','bc'));
//task2
function solve(str) {
    let upper = 0;
    let lower =0;
   for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        upper++;
    } else if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) {
        lower++;
    }
   }
   if (lower>upper) {
     return str.toLowerCase()
   } else if(upper>lower) {
      return str.toUpperCase()
   }else{
     return str.toLowerCase()
   }
}
console.log(solve("coDe"));
console.log(solve("CODe"));
console.log(solve("coDE"));
//task3
function dividing(str,str3,str2) {
    let index = str.indexOf(str2);
    let index1 =str3.indexOf(str2)
    let o =str.slice(0,index)
    let s =str3.slice(index1)
        return  o + "" + s;
}
console.log(dividing('hello','world','l'));
console.log(dividing('coding','anywhere','n'));
console.log(dividing('wonderful','people','e'));
//task4
function solves(str,str1) {
    let s =str.split('')
    let o = str1.split('')
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (s[i] === o[i]) {
            result += str[i] + str1[i];
        }
    }
    if (result === '') {
        return 'yoxdur';
    } else {
        return result;
    }
}
console.log(solves('xyab','xzca'));