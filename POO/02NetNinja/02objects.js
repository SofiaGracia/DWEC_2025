class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(`${this.email} just logged in`);
    }

    logout(){
        console.log(`${this.email} just logged out`);
    }
}

var userOne = new User('sofia@gmail.com', 'sofia');
var userTwo = new User('roser@gmail.com', 'roser');

userOne.login();
userTwo.logout();