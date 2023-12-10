class User {
    constructor(username){
        this.username = username
    }

    //making some method
    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

 const hitesh = new User('Hitesh')
 console.log(hitesh.createId());