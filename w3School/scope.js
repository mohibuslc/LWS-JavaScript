

// concept of local variable and Global Variable : 


let bouns = 20 ; 

function scopeVariable(first , second){

let result = first + second + bouns;

console.log(bouns)

return result ; 



}


const output = scopeVariable(23 , 55) ; 

console.log(bouns)



console.log(output)