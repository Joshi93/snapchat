//array methods
//push()
//pop()
//shift()
//unshift()
//splice()
//sort()
//reverse()

let a = [10,20,30,40,50]
a.push(60);
console.log(a);

let b = [10,20,30,40,50]
b.pop()
console.log(b);

let c = [10,20,30,40,50]
c.shift()
console.log(c);

let d = [10,20,30,40,50]
d.unshift(9)
console.log(d);

//splice
//syntax
//0 it is used to add a value in the given index by moving the index value already present forward
// 1 is used to add a value in the given index, by replacing the current index value
//variable name.splice(index, splice, value)

let days = ["sunday","monday","tuesday","thursday","friday","saturday"];
days.splice(3,0,"wednesday")
console.log(days);

let so = ["g","e","f","b","a","j"];
console.log(so.sort().reverse());

let rev = "javascript"
console.log(rev.split("").reverse().join(""));