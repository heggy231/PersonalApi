const db = require ('./models');

const dummyMovie ={
    title: "Iron Man",
    director: "WHO"

}

db.Movie.create(dummyMovie,(err,newMovie)=>{
    if(err) return console.log(err)
    console.log(newMovie);
});



// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


