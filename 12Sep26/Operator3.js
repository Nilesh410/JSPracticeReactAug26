function tempdisplay()
{
    console.log(arguments)
}

let temp=[12,3,5,6,7]
tempdisplay(temp)
tempdisplay(...temp)