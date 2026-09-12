var data ="Itview"
console.log(data) //Itview
var data=20  //redecleration in same scope\
console.log(data) //20
function display()
{
    
    console.log(data) //20
}
display()
console.log(data) //20