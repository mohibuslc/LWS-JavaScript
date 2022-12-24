

const personInfo = {

    firstName: 'Kamal',
    secondName: ' Ahmed',

    salary: 19000 , 

    address: 'Tillaghor',

    getfullName: function(){

        console.log(this.firstName , this.secondName)
    },

    getSalary: function(amount){     
        
        this.salary = this.salary-amount;

        return this.salary 
    }

}



console.log(personInfo.getSalary(1000))