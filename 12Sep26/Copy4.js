let obj1={
    name:"Ramesh",
    role:"SDE",
    city:"Pune",
    contact:{
        email:"ramesh@gmail.com",
        mobno:12345678,
    }
}

//let obj2=structuredClone(obj1)
let obj2=JSON.parse(JSON.stringify(obj1))
console.log(obj1)
console.log(obj2)

obj2.city="Mumbai"
obj2.contact.email="ramesh123445@gmail.com"
console.log(obj1)
console.log(obj2)