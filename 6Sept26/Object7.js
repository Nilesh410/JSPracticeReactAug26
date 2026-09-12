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

const result=arr.filter((obj)=>obj.marks>80)
                .map((obj)=>obj.username)
console.log(result)