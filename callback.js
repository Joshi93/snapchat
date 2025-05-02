//callback
//callback hell
function walk(callback){
    setTimeout(()=>{
        console.log("walk the dog");
        callback()
    },5000);
}
function clean(callback){
    setTimeout(()=>{
        console.log("clean the car");
        callback();
    },2500);
}
function trash(callback){
    setTimeout(()=>{
       console.log("take out the trash");
       callback();
    },2000);
}
//walk(clean);
function work(callback){
    setTimeout(()=>{
        console.log("work done");
    },1000);
}

walk(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{})
        })
    })
})