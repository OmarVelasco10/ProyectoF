const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "torneo"
})

const publicDirectory = path.join(__dirname , "./public")
app.use(express.static(publicDirectory));
app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use(cookieParser());

app.set('view engine' , 'hbs');

db.connect( (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("bd is conected")
    }
});

//Definir routes
app.use('/' , require('./routes/pages'));


app.listen(3030, () => {
    console.log("Server iniciado en puerto 3030");
});