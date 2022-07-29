const Schema = require('mongoose').Schema;

// const foodItemSchema = new Schema({
//   name: {type: String, required: true},
//   image: {type: String},
//   brand: {type: String, required: true},
//   carbs: {type: Number, required: true, default: 0}
// }, {
//   timestamps: true
// });


const foodItemSchema = new Schema({
  tag_name: {type: String},
  carbs: {type: Number, required: true}
});

module.exports = foodItemSchema;
