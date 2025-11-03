var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    }

};

console.log(userOne.name);

//If you write in console userOne['email'] the output will be the value