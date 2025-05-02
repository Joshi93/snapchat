//settime out
//synchronous
//asynchronous

function box1(){
    setTimeout(() => {
        console.log("give me the change back");
    },5000);
}
function box2(){
    setTimeout(() => {
        console.log("take the money");
    },2000);
}
function box3(){
    setTimeout(() => {
        console.log("give it to him");
    },3000);
}
box1();
box2();
box3();