let obj1={
    name:"Ramesh",
    role:"SDE",
    contact:"ramesh@gmail.com",
    city:"Pune"
}

// Make a copy of obj1
let obj2=obj1
console.log(obj1)
console.log(obj2)
console.log(obj1==obj2)
obj2.city="Mumbai"
console.log(obj1)
console.log(obj2)
