const user={
    name:"Ramesh",
    role:"SDE",
    city:"Pune",
    contact:{
        email:"ramesh@gmail.com",
        mobno:12345678,
    }
}

const {contact,role}=user //destructure the object
console.log(contact)
console.log(role)