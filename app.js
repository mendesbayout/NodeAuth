const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express(); //intialize app state
const mongoose = require('mongoose');


// importing keys
const db = require('./config/keys').MongoURI;

// executing ,
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongoDB Connected..'))
    .catch(err => console.log(err));


//EJS (or handlebars)
app.use(expressLayouts);
app.set('view engine', 'ejs')


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on port ${PORT}`));