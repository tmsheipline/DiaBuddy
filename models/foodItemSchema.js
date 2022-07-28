const Schema = require('mongoose').Schema;

const foodItemSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String},
  brand: {type: String, required: true},
  carbs: {type: Number, required: true, default: 0}
}, {
  timestamps: true
});

module.exports = foodItemSchema;

// const foodItemSchema = new Schema({
//   food_name: String,
//   brand_name: {type: String},
//   photo_thumb: {type: String},
//   nf_total_carbohydrate: {type: Number, required: true}
// });