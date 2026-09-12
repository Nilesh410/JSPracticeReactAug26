let arr1=[12,5,3,7,8]
let arr2=[9,4,2,1,10]

let joinarr1=arr1.concat(arr2)
console.log(joinarr1)

let joinarr2=[...arr1,...arr2] //use of spread operator
console.log(joinarr2)

let joinarr3=[...arr1,45,56]
console.log(joinarr3)