const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


const {Schema, model} = mongoose

const foodItem = new Schema({
    foodname: {type: String, required: true},
    carbs: {type: Number}
})

const mealSchema = new Schema({
    userId: Number,
})

const Meal = model("Meal", mealSchema);

const FoodItem = model("FoodItem", foodItem)
 

module.exports = Meal
module.exports = FoodItem