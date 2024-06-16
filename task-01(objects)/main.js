//task 1
const user = {
  name: "Eltaj",
  surname: "Mammadzada",
  gender: "male",
  birthday: "1999",
};
console.log("task 1", user);
//task 2
const userTwo = {
  birthday: "1999",
};
console.log("task 2 one", userTwo);
userTwo.age = 12;
console.log("task 2 age add", userTwo);
delete userTwo.birthday;
console.log("task 2 birthday delete", userTwo);
//task 3
const userObj = {
  name: "Rasim",
  surname: "Abbasov",
};

for (const key in userObj) {
  console.log(`task3: ${key}:${userObj[key]}`);
}
//task 4

const objj ={
  setAge:function (age=18) {
    return age
  },
  getYearsBeforeRetirement: function (age) {
    let ages =this.setAge =age
    let sum =65-ages
    if (ages>=65) {
      return 'size pensiya dusur'
    } else {
      return `siz ${sum} il sonra pensiya ala bilersiz`
    }
  }
}
console.log('task 4',objj.setAge(23));// objj setAge 23

console.log('task4',objj.getYearsBeforeRetirement(53));// 12


//task 5
function prop2Taker(obj) {
  return obj['prop-2'];
}
console.log('task 5',prop2Taker({ one: 1, 'prop-2': 2 })); 
console.log('task 5',prop2Taker({ 'prop-2': 'two', prop: 'test'}));
//task 6
function propertyTaker(obj,propertyName) {
  return obj[propertyName];
}
console.log('task 6',propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent'));
console.log('task 6',propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country'));
console.log('task 6',propertyTaker({name:'ali', age:12}, 'name'));
//task 7
function existsAndTruthy(obj, propertyName) {
  for (let key in obj) {
      if (key === propertyName && obj[key]) {
          return true;
      }
  }
  return false;
}
console.log(existsAndTruthy({a:1,b:2,c:3},'b')); 
console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'));
console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')); 
