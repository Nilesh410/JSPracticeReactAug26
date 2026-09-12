const user={
    username:"Sandeep",
    userid:1234,
    useremail:"sandeep@gmail.com",
}

console.log(user)

Object.defineProperty(user,'userid',{
    writable:false,
    configurable:false}
)
user.userid=2340
delete user.userid
console.log(user)