debugger
var data=234.5
console.log(data) //234.5
data="Itview" //reinitialize in same scope
console.log(data) //"Itview" 
function display()
{
    debugger
    data=true //reinitialize in diff scope
    console.log(data) //234.5 Itview true
}
display()
console.log(data)//234.5 Itview true