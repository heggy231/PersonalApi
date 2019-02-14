const mongoose = require("mongoose");
const Movie = require('./movie');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

exports.Movie= Movie;





