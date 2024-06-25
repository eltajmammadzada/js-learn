//task1
let group =['Anar','Ali','Raul']
group.push('Rauf')
group.shift()
console.log(group);
//task2
let arr =[1,2,3]
arr[1]='Classified'
console.log(arr);
//task3
let as = [1, 2, 3, 4, 5];
let copy = as.slice();
for (let i = 0; i < copy.length; i++) {
    copy[i] *= 2;
}
console.log(copy);
//task4
let ary = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi']
console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);
//task5
// let input = prompt("Vergüllə ayrılmış beş ədəd daxil edin:");
// let numbers = input.split(',');
// let minNumber = Number(numbers[0]); 
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = Number(numbers[i]);
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//     }
// }
// console.log("Ən kiçik ədəd:", minNumber);
//task6
let num ='32, 31, 34, 36, 31'.split(',').join(';')
console.log(num);