// Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cpoRouter = require('./routes/cpoRouter');
const app = express();

// DB Setup
mongoose.connect('mongodb://localhost/sp_database', { useNewUrlParser: true});

// App Setup
// app.use address argument as middleware
app.use(morgan('combined')); 	// morgan is just a logging framework incoming request, used for debugging
app.use(bodyParser.json({ type: '*/*' })); // Parse incoming request to json
app.use('/api/cpo', cpoRouter);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // create http server that forward everything to our express app
server.listen(port);
console.log('Server listening on:', port);
