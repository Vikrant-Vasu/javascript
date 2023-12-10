// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

    const chai= new User('Vikrant' , 'kdjslk@gmail.com', '123' )
    console.log(chai.encryptPassword());