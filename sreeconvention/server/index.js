const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sreeconvention')
    .then(() => console.log('connected to MongoDb'))
    .catch(err =>console.error('Could not connect',err));
