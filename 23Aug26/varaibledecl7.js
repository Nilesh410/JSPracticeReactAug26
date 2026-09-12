let data=20
console.log(data) //20
data="Itview"
console.log(data) //Itview
function display()
{   
    console.log(data) //Itview
    data=true
    console.log(data) //true
}
display()
console.log(data) //true