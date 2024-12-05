//string creation
const username = 'henry@gmail.com';
let charAt = username.charAt(4);
console.log(charAt);
let charCodeAt = username.charCodeAt(9);
console.log(charCodeAt);
let concat = username.concat(' asiedu', ' kwasi');   // Appending new string 
console.log(concat);
let endsWith = username.endsWith('@gmail.com');
console.log(endsWith);
let includes = username.includes('e');
console.log(includes);
let indexOf = username.indexOf('e');
console.log(indexOf);
let lastIndexOf = username.lastIndexOf('e');
console.log(lastIndexOf);
let length = username.length
console.log(length);
let repeat = username.repeat(3);
console.log(repeat);
let replace = username.replace('he', 'ell')
console.log(replace);
let search = username.search('t');
console.log(search);
let slice = username.slice(2, 6);
console.log(slice);
let split = username.split('n');
console.log(split);
let substring = username.substring(2, 6);
console.log(substring);
let toLowerCase = username.toLowerCase();
console.log(toLowerCase);
let toUpperCase = username.toUpperCase();
console.log(toUpperCase);
let trim = username.trim()
console.log(trim);

//Object creation
/*const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); */
const password = '1234567890';

const person = { name: 'John', age: 20, confirm: true };
const student = { '23sd': 'Henry', 'sfsf44': 66, 'qwe 54': 'bbf' }
student['qwe 54']
person.name = 'Ella',
    person.familySize = 50;
person['name'] = 'Asiedu';
console.log(student);
/*for object 
Syntax is key:value and its called properties*/

let main = {
    school: "Knust",
    class: 100,
    courses: {
        math1: "calculus",
        math2: { x: "algebra", y: "twi" },
        math3: ['english', 'french']
    },

}
console.log(main['courses']["math2"]["y"])
console.log(main.courses.math3[1]);
/*
Like the switch, We use case likewise the object we use key.
In objects, we use key and value (they referred to as properties).
Mostly the one before the column is the key
Arrays can be included in objects.
Dot notation: To add, find, search for more information
Bracket notation (specifically square bracket): To add, find or search for information 

*/

//array
const schools = ['mango', 'orange', true, 764, { name: 'Kwasi', age: 25 }];
console.log(schools[4]['age']);   
/* The easiet way to create an array is to use "literal array"
The push() method adds an element at the end of the array.
The unshift() method adds an element at the beginning of the array.
You can also add elements or change the elements by accessing the index value.
Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined
Basically, if you try to add elements to high indices, the indices in between will have undefined value.
You can use the pop() method to remove the last element from an array.
If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element. 
You can find the length of an element (the number of elements in an array) using the length property.
*/

//Array methods
//CONCATE
let fresh=["knust","UPSA","ug","apple"]
let mag=["tomato","bread","manU","chelsea","football"]
console.log(fresh.concat(mag));


let kof=["yaa", "ama"]
let man=["wife","husband","children"]
console.log(kof.concat(man));

//indexOf
let great=man.indexOf("children")
console.log(great);

//includes
let nun=kof.includes("l")
console.log(nun);

//push
man.push("friend")
console.log(man);

//unshift
man.unshift("friend")
console.log(man);

//shift
man.shift()
console.log(man);

//pop
man.pop()
console.log(man);

//slice
let cup=mag.slice(1, 3)
console.log(cup);

//splice
let cups=mag.splice(0,0, 'Tea')
console.log(mag) ;
console.log(cups);

//function
//Function is used to group similar codes 
// DRY ===> Don't Repeat Yourself
function country() {
     console.log('Country ');
}

const country1 = function(){
     console.log('Country 1');
}

let country2 = () => {
    console.log('Country 2');
}
// Calling functions
country();
country1()
country2();

// Group two
// anything inside the bracket is called argument
//when declaring use the variable names but in calling you can use any name
function institutions(school) {
  console.log(school);   
}


institutions('knust');
institutions('UCC');
institutions('Legon')

institutions({courses:"knust",course:"ucc",cours:"legon"})
 
function persons(name, age, contact) {
    console.log(name, age, contact);
}


persons('Ella', 19, '0424524242')

function isShowing(argument) {
    let asd = 10;
    let school = "Adwoa";
    return asd
}
 
console.log(isShowing('school'));


const breakfast =  ['Milk', 'Milo', 'Sugar', 'Water'];

// Anonymous function or callback function
// Find
const output1 = breakfast.find(function(item, index){
       const result = index === 2;
       return result; 
})

console.log(output1)

// Doesn't require any return statement
breakfast.forEach(function(item, index) {
    console.log(index);
})

// Requires a return statement
const output2 = breakfast.map(function(item, index) {
    return item;
})


console.log(output2);

 