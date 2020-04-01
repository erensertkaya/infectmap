const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/infectmap',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('open', () => {
        console.log("MongoDB: Connected");
    });
    mongoose.connection.on('error', (err) => {
        console.log("MongoDB: Error", err);
    });
}

