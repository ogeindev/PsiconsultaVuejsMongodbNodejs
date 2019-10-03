const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

// Settings
app.set('port', 3000)
require('./database')

app.use(cors())

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 

// Routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/tasks'))


// Server is listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port') )
})