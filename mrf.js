//map
//filter
//reduce


//map syntax
//variable name.map((value,index,accumulator)=>)

    let a = [10,20,30,40,50]
    let b = a.map((v,i,a)=>a*5)
    console.log(b);

//filter
//variable name.filter((value,index,accumulator)=>)
    let c = [122,525,23,2,458,45,72,54,32,1,63,3,88,6];
    let d = c.filter((x,y,z)=>y<=5);
    console.log(d);

//reduce syntax
//variable name.reduce((accumulator,actualarray)=>)
    let r = [10,20,30,40,50]
    let f = r.reduce((k,l)=>k+l)
    console.log(f);


