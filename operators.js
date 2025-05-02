//operators

const { log } = require("console");

//Arithmetic operators--------

//add+
//sub-
//mul*
//div /
//modulus %
//exponent **
//increment ++
//decrement --
let a=50;
let b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let c=10;
c++
console.log(c);

let d=10;
d--
console.log(d);

//assignment operators
let x=10;
x+=10;
console.log(x);

//comparison operator

//<
//>
//<=
//>=

let z=10;
let zz=10;
console.log(z<zz);
console.log(z>zz);
console.log(z<=zz);

//logical operators

// && ----> and
// || -----> or
// ! -----> not

let t=10;
let u=10;
console.log(t!=u);

//strict operators

// == double equal \ loose equality
// ===triple equal \ strict equality

let w=10;
let q="10";
console.log(w==q);
console.log(w===q);

//Ternary operators
let age=150;
let result=(age>=18 && age<=100)? "he is elgible to vote":"not eligible"
console.log(result);

let mark=50;
let rank=(mark>=100 || mark <=40)?"pass":"fail"
console.log(rank);
