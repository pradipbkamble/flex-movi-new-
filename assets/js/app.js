let cl=console.log;
// //lexical scope>> scope of  parent function
// //inner function will call in between outer scope

// function outerfunction(){
//    let x=122;
//    return function innerfunction(){
//       return (x)   ///inner function is lexial scope of parent function
//    }
// }

// let inti= outerfunction()
// cl(inti)

// let d1= inti()   
// cl(d1)



// //closer>> a function with lexical
//  // when we return a function inside outer function
//  // inner function create a scope which is called lexical scope
//  //inner function can access all propertis of outer function 
//  //when we call outer function>> it returns inner function 
//  //this inner function bring out all properies of outer function outside outer function  

function Creaatefun( fname,lname,email){
   
      this. fname = fname;
       this.lname= lname;
       this .email= email
   }

   let obja= new Creaatefun("john","duo","1gamil.com");
   cl(obja)
   let obja1= new Creaatefun("john","duo","1gamil.com");
   cl(obja1)


   let p= {
   fname: "dip",
   lname:"kam"
   }

   let p1=p;
   cl(p1)
   p1.fname =" pra";
   cl(p1)
