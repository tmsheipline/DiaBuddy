const mongoose = require('mongoose');

// require('./brand');
const foodItemSchema = require('./foodItemSchema');

module.exports = mongoose.model('FoodItem', foodItemSchema);