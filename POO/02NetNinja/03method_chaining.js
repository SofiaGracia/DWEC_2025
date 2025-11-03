class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(`${this.email} just logged in`);
        return this; // If we return "this" we can do method chaining
    }

    logout(){
        console.log(`${this.email} just logged out`);
        return this;
    }
}

var userOne = new User('sofia@gmail.com', 'sofia');
var userTwo = new User('roser@gmail.com', 'roser');

userOne.login().logout();