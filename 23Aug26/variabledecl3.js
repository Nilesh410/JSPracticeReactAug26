var data ="Itview"
console.log(data) //Itview
function display()
{
    var data=20  //redecleration in different scope
    console.log(data) //20
}
display()
console.log(data) //Itview