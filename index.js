const mongoose = require('mongoose');
require('./config/db')


const express = require('express');
const hbs = require('express-handlebars')
const path = require('path');
const router = require('./routes');

const cookieParser = require('cookie-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config({path: 'variables.env'});





const app = express();

//HABILITAR TEMPLATE ENGINE
app.engine('handlebars',
   hbs({
    defaultLayout: 'layout',
    helpers: require('./helpers/handlebars')
   })
);

app.set('view engine', 'handlebars')
// TERMINO DE HABILITAR TEMPLATE ENGINE

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser())

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({

        mongooseConnection: mongoose.connection
    })
}))




//vincular rutas
app.use('/', router());



//PUERTO DE LA APLICACIÓN
app.listen(process.env.PUERTO)