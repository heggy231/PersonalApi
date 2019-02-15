const db = require ('./models');

const dummyMovie ={
    name: "Iron Man",
    director: "Jon Favreau",
    releaseDate: 2007
}

db.Movie.create(dummyMovie,(err,newMovie)=>{
    if(err) return console.log(err)
    console.log(newMovie);
});



// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


// const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
