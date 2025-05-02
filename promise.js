// //promise ---> method 1 without async

// function go(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("i am going to the shop")
//         }, 3000);
        
//     })
// }
// function buy(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("buy the product")
//         },3000);
//     })
// }
// function change(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("collect the change")
//         },5000);
//     })
// }
// function back(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("back to home")
//         },5000);
//     })
// }
// go()
// .then(val=>{console.log(val);return buy()})
// .then(val=>{console.log(val);return change()})
// .then(val=>{console.log(val);return back()})
// .then(val=>{console.log(val)})

//promise with async
// promise  

function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop = true
            if(shop){
                resolve("iam going to the shop")
            }
            else{
                reject("iam not going to the shop")
            }
            
        }, 5000);
       
    })
}
function buy (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prod = false
            if(prod){
                resolve("iam buy the product")
            }
             else {
                reject("iam not buy the product")
             }
        }, 3000);
        
    })
}
function change (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const get = true
            if(get){
                resolve("i get change back")
            }
            else{
                reject("i did not get change back")
            }
        }, 5000);
        
    })
}
function back (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const home = true
            if(home){
                resolve("back to the home")
            }
            else{
                reject("going to the park")
            }
            
        }, 3000);
       
    })
}
// go()
// .then(val => {console.log(val); return buy()})
// .catch(val => {console.log(val); return change()})
// .then(val => {console.log(val); return back()})
// .then(val => {console.log(val)})

async function hi () {
    try {
        const a = await go();
        console.log(a);
        const b = await buy();
        console.log(b);
        const c = await change();
        console.log(c);
        const d = await back();
        console.log(d);
    } catch (error) {
        console.log(error);   
    } 
}
hi();