
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    login() {
        console.log(`${this.email} just logged in`);
        return this; // If we return "this" we can do method chaining
    }

    logout() {
        console.log(`${this.email} just logged out`);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

var userOne = new User('sofia@gmail.com', 'sofia');
var userTwo = new User('roser@gmail.com', 'roser');
var admin = new Admin('ryu@gmail.com', 'ryu');
console.log(userOne);

// var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);

// console.log(users);

