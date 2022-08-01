const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();

const MealRouter = require('./controllers/api/meals')
require('./config/database');

const app = express();

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/foodItem');
// const Restaurant = require('./models/restaurant');
// const Meal = require('./models/meal');

// Local variables will come in handy for holding retrieved documents
let user, item, restaurant, meal;
let users, items, restaurants, meals;


app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('api/selectedMeal', require('./routes/api/meals'))

// Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/foodItems', ensureLoggedIn, require('./routes/api/foodItems'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.use(express.static(path.join(__dirname, "build")));

//SEED Data
app.get("/seed/brands", (req, res) => {
  const brandData = [
    {
      name: "Five Guys",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-16-1200x750.png",
    },
    {
      name: "Burger King",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-6-1200x750.png",
    },
    {
      name: "Burger Kind",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-19-1200x750.png",
    },
    {
      name: "McDonalds",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-22-1200x750.png",
    },
    {
      name: "Panda Express",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-25-1200x750.png",
    },
    {
      name: "Taco Bell",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-34-1200x750.png",
    },
    {
      name: "Wendys",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-36-1200x750.png",
    },
    {
      name: "Panera",
      image:
        "https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-26-1200x750.png",
    },
    
    


    
    
  ];
  // Delete all ingredients
  Brand.deleteMany({}).then((data) => {
    // Seed Starter ingredients
    Brand.create(brandData).then((data) => {
      // send created fruits as response to confirm creation
      res.json(data);
    });
  });
});