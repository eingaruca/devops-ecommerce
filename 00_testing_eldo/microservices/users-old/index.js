const {db, adminDB} = require('./db');
const admin = require('firebase-admin');
const firebase = require('firebase');
const express = require('express');
const router = express.Router();





// import express from 'express';
// import cors from 'cors';

// const config = require('./config.js');

const app = express();

// app.use(cors());
app.use(express.json());


app.listen(3000, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
