function demo(result) //Higher order function
{
   console.log("From Demo function")
   console.log(result)
   result()
   
}
//callback Function
const demo1=()=>{
    console.log("From call back function")
}

demo(demo1)