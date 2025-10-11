// Print
console.log("Hello Ram");

// Variable: It is a memory element
var age = 20;
var name = "Ram";
var isMale = false;
 
console.log(age);

var age=30;
console.log(age);

// Note: Never use var for variable declaration.

// Always use const, unless let is required.

// let, const
let phone = 947483998;
phone = 626387940;

console.log(phone);


// Data types
/* 
1. String "Ram"
2. Number 20
3. Boolean true
4. Object {name:"Ram"}
5. Array [123, 345, 545]
*/

const address = "Pokhara"; //String
const postalCode = 665643; //Number
const mobile = "6385895905"; //String
const isAdult = false; //Boolean

console.log(address);
console.log(postalCode);
console.log(mobile);


//Object, key value pair 
const profile = {
    age: 20,
    name: "Hari",
    address: {
        city: "Dharan",
        province: "Koshi",
    },
    phone: [7364, 86488, 872638],

};

console.log(profile["address"]["province"]);
console.log(profile.age);

//Array, index value (position), index always starts from ZERO
const marks = [90, 80, 87, 95, "ram", true, {science: 90}, ["good"]];
console.log(marks[0]);

/* Operators
1. Arithmetic operation: +, -, *, /, %
2. Relational operation: >, <, ==, >=
3. Logical operation: && (AND), || (OR), NOT(!)
*/

console.log(5 + 6);
console.log(5 - 6);
console.log(5 + 6);
console.log(12 / 5);
console.log(12 % 5);

console.log(5 > 6);
console.log(5 < 6);
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 == 6);
console.log(5 != 6);

console.log(5 == "5");
console.log(5 === "5");

//AND: If one of the input is false, then result is false.
console.log(false && true);
console.log(true && true);

//OR: If one of the input is true, then the result is true.
console.log(true || false);

//NOT: IF input is true, then the result is false.
console.log(!true);



/*
Conditional statement (if, else, switch)
if (condition) {
}
else if{
}
else{
    }
    if else ladder
*/

const gpa = 4;

if (gpa >= 3 ) {
    console.log("Distinction");
}
else if (gap >= 2) {
    console.log("First division");
}
else if (gpa >= 1) {
    console.log("Second division");
}
else {
    console.log("Fail");
}

/*
switch (value) {
case compareValue:
...
default:
}
*/

const day = "sunday"

switch (day) {
    case "saturday":
        console.log("HOliday");
        break;

        case "sunday":
            console.log("Holiday");
            break;

            default:
                console.log("Not holiday");
                break;
}


