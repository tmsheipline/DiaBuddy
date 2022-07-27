// Require the Mongoose models
const User = require('./models/user');
const FoodItem = require('./models/foodItem');
const Brand = require('./models/brand');
const SelectedMeal = require('./models/selectedMeal');

// Local variables will come in handy for holding retrieved documents
let user, foodItem, brand, selectedMeal;
let users, foodItems, brands, selectedMeals;