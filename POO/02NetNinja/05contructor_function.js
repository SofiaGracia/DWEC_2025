function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function () {
        console.log(`${this.email} has logged in`);
    }
}

var userOne = new User('sofia@gmail.com', 'sofia');
var userTwo = new User('roser@gmail.com', 'roser');

console.log(userOne);
userTwo.login();