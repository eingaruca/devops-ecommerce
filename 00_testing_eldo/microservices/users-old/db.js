const firebase = require('firebase');
const admin = require('firebase-admin');
const { serviceAccount, firebaseConfig } = require('./config');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    // databaseURL: ""
});

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const adminDB = admin.firestore();

module.exports = {
    adminDB,
    db
}