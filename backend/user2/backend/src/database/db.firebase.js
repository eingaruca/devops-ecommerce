// const firebase = require('firebase');
const config = require('../config');

// const { initializeApp } = require("firebase/app");
const firebase = require('firebase');

// const db = initializeApp(config.firebaseConfig);
// console.log("-----------> "+ config.firebaseConfig.apiKey);
const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;