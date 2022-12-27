const persone ={


    firstName : 'Jhone' , 
    lastName :'Doe',
    ID : 566990 , 

    fullname : function(){

        return this.firstName + " "+ this.lastName ; 

    }
}

const name = persone.fullname()

console.log(name, persone.ID); 


const Car = {

    name: "BMW", 
    model: 500 , 
    weight: "860kg",
    color: "White",
    start: function(){

        console.log('Car has Starting')
    },

    drive: function(){

        console.log(' Car is Driving')


    },

}

// Car.drive()




