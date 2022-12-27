

// javaScript  when make the return and function take  some referance Value this one call Closer . 



function stopWatch(){


    let count = 0 ; 

    return function (){


        count++ 

        return count ; 

    }
}

const output = stopWatch();

console.log(output())
console.log(output())
console.log(output())
console.log(output())
console.log(output())
console.log(output())

const output2 = stopWatch();
console.log(output2());
console.log(output2());
console.log(output2());
console.log(output2());
console.log(output2());
console.log(output2());

console.log(output())