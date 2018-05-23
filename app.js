const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//create an app
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// mongoose
mongoose.connect('mongodb://localhost:27017/products');


const port = process.env.PORT || '10';
app.set('port', port);

//set a static public folder
//app.set(express.static(path.join(__dirname,'public')));

//import routes
const api = require('./server/routes/products');
//const user = require('./routes/user');

app.use('/api/products', api);
//app.use('/user',user);

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));