// Variable names are case sensitive means "a" & "A" are different from each other
Name = 'Sufiyan';
name = 'Faizan';
console.log(Name);
console.log(name);

// only Letters, UnderScore "_" and $ should be first character
// Only Letters, Digits, UnderScore "_" and $ is allowed, Space is not allowed
fullName = 'Ahsan Khan';
_fullName = 'Umer Khan';
$fullName = 'Naveed Khan';
// the below variable will give you error bcz the cannot meet the requirement
// to meet variable declaration
// full@Name = 'Noman Khan';      
// #fullName = 'KaleemUllah Khan';
// $#fullName = 'Nadeem Khan';    
console.log(fullName);
console.log(_fullName);
console.log($fullName);

// Resserved words cannot be variables 



// whenever we defined a variable we need a keyword to declare a variable
// let, const and var

// var = A global scope variable. Variable can be re-declared & updated
// now we can not use var as a keyword in The Industry it is a key word before es6 after lounch of es6 we have 2 new keywords named let and const

// let = A block scope variable. Variable cannot be re-declared but can be updated.
let lastName = 'Shah';
console.log(lastName);
lastName = 'Hakeem';
console.log(lastName);

// const = A block scope variable. Variable cannot be re-declared or updated.
const Pi = 3.14;
console.log(Pi);
// Pi = 123;       //this Pi variable won't update cuz it is a constant type variable
// console.log(Pi);



// Data Types
// Primitive DataTypes
// Number, String, Boolean, Undefined, Null, (BigInt, Symbol) these two rarely used in Industry

// Non-Primitive DataTypes
// Objects = A collection of values
// let obj = {
//     key: value
// }
let obj = {
    name: 'Sufiyan',
    age: 21,
    course: 'WAP',
    batch: 10
}
console.log(obj);
// want to get specific information
console.log(obj.name);
console.log(obj.age);
console.log(obj.batch);

// Q: 01. Create a const object called "product" to store information shown in the picture.
const product = {
    img: 'img/pen.png',
    productName: 'Parker Jotter Standard CT Ball Pen (Black)',
    rating: {
        stars: 'img/stars/4.png',
        count: 7002,
    },
    isDeal: false,
    price: 270,
    disscount: 5,
}
console.log(product)

// Q: 02. Create a const object called "profile" to store information shown in the picture.
const profile = {
    username: 'Sufiyan_Ahmed_Khan',
    isFollow: true,
    profileDetails: {
        followers: 92,
        posts: 1,
        following: 19,
    },
    profile: 'img/profiles/sufiyan'
}