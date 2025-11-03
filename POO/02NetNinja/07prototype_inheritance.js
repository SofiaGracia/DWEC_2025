function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(`${this.email} has logged in`);
}

User.prototype.logout = function () {
    this.online = false;
    console.log(`${this.email} has logged out`);
}

// This is a constructor
function Admin(...args) {

    // I al apply li passem esta instància i un array d'arguments
    // User.apply(this, [args[0], args[1]]);
    User.apply(this, args);

    // Properties that only the admin will have
    this.role = 'super admin';
}

// NOw we want to inherit the user's prototype
// The prototype is an object
// We want to create a new object for the admin prototype which is based on the prototype for the user
// That's why we user Object.create
Admin.prototype = Object.create(User.prototype);

//Now we can add other methods
Admin.prototype.deleteUser = function (user) {
    users = users.filter(u => { return u.email != user.email });
};

var userOne = new User('sofia@gmail.com', 'sofia');
var userTwo = new User('roser@gmail.com', 'roser');
var admin = new Admin('admin@gmail.com', 'admin');

var users = [userOne, userTwo, admin];

// console.log(userTwo);
// console.log(admin);
// admin.login();

admin.deleteUser(userOne);
console.log(users);