let obj1={
    name:"Ramesh",
    role:"SDE",
    contact:"ramesh@gmail.com",
    city:"Pune"
}

//want to duplicate of obj1
// let obj2=Object.assign(obj1)
let obj2={...obj1}  //shallow copy
console.log(obj1)
console.log(obj2)

obj2.city="Mumbai"
console.log(obj1)
console.log(obj2)