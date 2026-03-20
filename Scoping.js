 let age="12"
/*if(age>18)
{
    console.log("Eligile to vote")
}*/


 /*if(age>18)
{
    console.log("Eligile to vote")
}
else{
    console.log("Not Eligile to vote")
}*/

/*if(age>18)
{
    console.log("Eligile to vote")
}
else if(age<18){
    console.log("Not Eligile to vote")
}
else{
    console.log("Invalid To Value")
}
*/
/*
if(true)
{
    let a=50
    let b=25
    console.log("value of a inside of the block",a)
    console.log("valueof a inside of the block",b)
}


if(true){
    const a= 60 //ReferenceError: a is not defined//
console.log("value of a inside of the block",a)
}
 console.log("valueof a inside of the block",a)

 */
/*
if(true)
{
    var a=70
    console.log("value of a inside of the IF BLOCK",a)
}
console.log("value of a outside of the IF BLOCK",a)
*/

function funscope()
{
    if(true)
    {
      var a=80
      console.log("value of a inside of the if block",a)
    }
        console.log("value of a outside of the inside function if block",a)
    }
    funscope()
     //console.log("value of a outside of the if block",a)

       //Var -Function scoped
       //let & const - Blocked scoped