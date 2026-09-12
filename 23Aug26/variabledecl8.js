let data=20
console.log(data) //20
//let data="India" // redecleration is not possible in same scope
console.log(data)
function display()
{  
    let data=true  //redecleration is possible in diff scope
    console.log(data) //true
}
display()
console.log(data) //20