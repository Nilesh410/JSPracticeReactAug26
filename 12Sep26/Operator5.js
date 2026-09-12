function tempdisplay(...ele) //take all arguments value and combine and make an array
{
    console.log(ele) //[12,3,5,6,7]
}

let temp=[12,3,5,6,7,67,90,12,56]

tempdisplay(temp)  //[12,3,5,6,7]

tempdisplay(...temp) //12