const user={
    username:"Sandeep",
    userid:1234,
    useremail:"sandeep@gmail.com",
}

console.log(user)
user.usermobileno=12345678 //add new property in existing object
console.log(user)

user.username="Sanket" //update the one of the property
console.log(user)

delete user.userid //delete the property
console.log(user)