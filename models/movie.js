const mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var favoriteMovie = new Schema ({
    title: String,
    director: String,
    releaseDate: Date
})


const Movie = mongoose.model('Movie', favoriteMovie);
module.exports = Movie;
