const user={
    username:"Sandeep",
    userid:1234,
    useremail:"sandeep@gmail.com",
}

console.log(user)
Object.seal(user)
user.username="Sanket"
console.log(user)

user.usermobileno=12345678
console.log(user)

delete user.userid
console.log(user)