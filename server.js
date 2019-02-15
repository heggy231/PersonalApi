// require express and other modules
const express = require('express');
const app = express();

// let bodyParser = require('body-parser');

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

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
 

      

      {method: "GET", path: "/api", description: "Describes all available endpoints"},


      {
        method: "GET", 
        path: "/api/profile", 
        description: "Data about me", 
        name: "Rhea Roy",
        githubUsername: "rhear0yishere",
        githubLink: "https://github.com/rhear0yishere",
        githubProfileImage: "",
        personalSiteLink: "https://www.linkedin.com/in/rhearoy/", 
        currentCity: "San Jose",
        hobbies: [{name: "foo", type: "Cat", 
        breed: "Siamese"}, {name: "bar", type: 
        "Dog", breed: "Dalmation"}]

      },

      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});



/**********
 * SERVER *
 **********/

let movies =[];

app.get('/api/movie', (req, res) => {
  db.Movie.findOne((err,dummyMovie)=>{
    if (err){
      console.log("this aint it");
      }
      movies.push(dummyMovie)
      res.json(movies)
  })
 
});

app.post('/api/movies', (request, response) => {
  let movie2 = new db.Movie ({
    title : request.body.title,
    director : request.body.director,
  })
    movies.push(movie2);
    response.json(movies);
});


// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 7000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
  
