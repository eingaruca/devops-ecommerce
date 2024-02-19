const firebase = require('../database/db.firebase');
const User = require('../models/User');
const firestore = firebase.firestore();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config.js');

const loginUser = async(req, res, next) => {

    try {

        //Utilizando ID
        let user =  await firestore.collection('Users').doc(req.body.email);
        let data = await user.get();

        if ( !data.exists ) {
            return res.status(400).send('No existe usuario con ese ID');    
        } else {
            console.log("pass -> ", req.body.password)
            console.log("data.data() -> ", data.data().password);
            let matchPassword = await User.comparePassword(req.body.password, data.data().password)
            
            if ( !matchPassword ) {
                return res.status(401).json({
                    token: null,
                    message: "Invalid Password",
                  });
            }

            const token = jwt.sign({ id: data.id }, SECRET, {
                expiresIn: 86400, // 24 hours
            });

            res.cookie("token",token);
            res.json( data.data() );
        }

        

        // Forma con where
        // let {email, password} = req.body;
        // const users =  await firestore.collection('Users').where('email','==',email);
        // console.log("=========> " + users)
        // users.get().then(snapshot  =>{
        //     snapshot.forEach(user => {
        //         console.log('---> ', user.id, user.data());
        //     });
        // });
        // return res.send("////////// ");
        //  // const compare = await bcrypt.compare(password, receivedPassword)

    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const logoutUser = async (req, res,next) => {
    res.cookie('token',"",{
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

const profile = async (req, res, next) => {
    const user =  await firestore.collection('Users').doc(req.user.id).get();
    const userFound  = await user.data();

    return res.json({
        id: user.id,
        userfullname: userFound.name + " " + userFound.lastname,
        email: userFound.email
    });
};


/**
 * USER
 */
const createUser = async (req, res, next) => {
    console.log("Request => ", req.body)
    try{
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        const data = req.body;
        let userSave = await firestore.collection('Users').doc(req.body.email).set(data);
        return res.json(userSave); 
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const getUsers = async (req, res, next) => {

    try{
        const users = await firestore.collection('Users');
        const data = await users.get();
        let userArray = [];
            if(data.empty) {
                res.status(404).send('getUsers() => No USERS');
        } else {
            data.forEach( doc =>{
                let user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().lastname,
                    doc.data().email,
                    doc.data().password
                );
                userArray.push(user);
            });

            console.log("getUSER!")
            return res.json({"users": userArray});
        }
    }catch (error) {
        return res.status(400).send(error.message);
    }
};

const getUserById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user =  await firestore.collection('Users').doc(id);
        const data = await user.get();

        if ( !data.exists ) {
            return res.status(400).send('No existe usuario con ese ID');    
        } else {
            return res.send(data.data());
        }

    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const updateUser = async (req, res, next) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let user = await firestore.collection('Users').doc(id);

        let updatedUser = await user.update(data);

        return res.send(`Actualizado: ${updatedUser}`)
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        let id = req.params.id;
        let user = await firestore.collection('Users').doc(id).delete();
        return res.send(`Eliminando`)
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

module.exports = {
    loginUser,
    logoutUser,
    profile,
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
