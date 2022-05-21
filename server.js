require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('middleware/error-handler');

app.use(express.json());
app.use((req, res, next) => {    
    // acceder a notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');    
    // envoyer des requettes avec les méthodes GET, POST, PUT, DELETE, PATCH, OPTION
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/users', require('./routes/user.route'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));