const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


const {Schema, model} = mongoose

const mealSchema = new Schema({
    foodItems: [foodItem]
})

const foodItem = new Schema({
    foodname: {type: String, required: true},
    carbs: {type: Number}
})



const Meal = model("Meal", mealSchema);
 



module.exports = Meal