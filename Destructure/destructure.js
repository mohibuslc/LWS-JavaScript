
// Object ... 
// const person = {
//     name : ' Rahman' , 
//     job:'Frontend-Engineer' , 
//     salary : 34000 , 
//     friends:["Kamal", "Jamal","Tina"
// ]
// }

// const{name , salary , friends} = person ; 

// // console.log(name , salary +" Friend = " +  friends[2]);

// array 

const friends = ['Amir Kahn', 'Salman Khan', 'Tina Khan', 'Mhamud Khan', 'Jamal Ahmed','Nizam Ahmed']; 

const[firstFriend , NextFriend , ...resFriends] = friends


console.log(resFriends);
