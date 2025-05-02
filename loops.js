//loops type

//for loop
//while loop
//do while
// for of
// for in

//for loop syntax
// for (initialization;condition;increment or decrement)

for (let a = 1;a<=5;a++){
    console.log(a);
}

//while loop syntax
//initialization
//while(condition)
//code run
//++/--

let b=1;
while (b<=10){
    console.log(b);
    b++
}

//do while syntax

let c=1;
do{
    console.log(c);
    c++
}while(c<=6);

let my_name = "Joshua";
for (let i = 0; i < 5; i++) {
  console.log(my_name);
}

//for in
let e={
    name:"Joshua",
    place:"chennai",
    num:9876543210,
    id:87955
}
for(sape in e){
    console.log(sape+":"+e[sape]);
}

//for of
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
for (sap of days){
    console.log(sap);
}