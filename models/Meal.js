const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    foodName: {type: String, required: true},
    carbs: {type: Number}
})
    



module.exports = mongoose.model('Meal', mealSchema);