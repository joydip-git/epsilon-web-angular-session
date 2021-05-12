const a = 10;
//a = 20;
console.log(a)

let x = 20;//undefined
for (let index = 0; index < 2; index++) {
    let x = 30;
    console.log(x)//30
}
console.log(x)//20

const arr = [1, 2, 3, 4];
//arr = [10, 20];
arr.push(10)

// const copyArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     copyArr.push(element);
// }

//spread operator
const copyArr = [...arr];

//object-literal synatx
let joydipObject = {
    name: 'joydip',
    location: 'Bangalore',
    salary: 1000,
    print: function () {
        return this.name;
    }
}
// console.log(joydipObject.name)
// console.log(joydipObject.print())
// console.log(joydipObject['salary'])

joydipObject['id'] = 1;
joydipObject.subject = 'JS';

console.log(joydipObject)

//spread operator
let copyOfJoydipObject = { ...joydipObject };

//let copyOfJoydipObject = {};
// for (const propName in joydipObject) {
//     const propValue = joydipObject[propName];
//     //console.log(propName + ': ' + propValue)
//     copyOfJoydipObject[propName] = propValue;
// }
console.log(copyArr)
console.log(copyOfJoydipObject)

const people = [{
    name: 'joydip',
    location: 'Bangalore',
    salary: 1000,
    print: function () {
        return this.name;
    }
}, {
    name: 'anil',
    location: 'Chennai',
    salary: 2000,
    print: function () {
        return this.name;
    }
}]

//const copyOfPeople = [...people];
const copyOfPeople = [{ ...peopl[0] }, { ...people[1] }];
