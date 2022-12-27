// doing Map on the Array ...... and make double in it 



const numbers =[2 , 4, 12, 22,13]; 


// const result = numbers.map(function(element , index){



//     return (result) ; 

// })

// console.log(result) ; 


// const result = numbers.filter(function(value){

//     return value > 0 ; 



// })



// console.log(result);
// const result = numbers.find(function(value){

//     return value >=6 ; 



// })

// console.log(result)

const CarModel  = [{id:2001 , name:'Kamal'}, 
{id:3002 , name:'Tina'},
{id: 4001 , name: ' jamal'}

]; 

// const result = CarModel.map(n => n.name)

// console.log( result); 

// const result=CarModel.filter(i => i.id);
const result = CarModel.map(i => i.name)

console.log(result);


