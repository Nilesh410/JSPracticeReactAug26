/* const arr=[10,20,30,40]

const result=arr.map((ele)=>ele*2);

console.log(result) */

const arr = [
  {
    username: "Snadeep",
    marks: 50,
  },
  {
    username: "Sanket",
    marks: 80,
  },
  {
    username: "Rakesh",
    marks: 77,
  },
  {
    username: "Sachin",
    marks: 90,
  },
];

//console.log(arr);

const result=arr.map((obj)=>{
      return obj.marks
})
console.log(result)



