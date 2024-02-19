const bcrypt = require('bcryptjs')

class User {
    constructor(
        id,
        name,
        lastname,
        email,
        password
    ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;

    }

    
};

User.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}



module.exports = User;