const mongoose = require('mongoose')
const Schema = mongoose.Schema
const foodItemSchema = require('./foodItemSchema');

// Add schema below
const lineItemSchema = new Schema({
    // Set qty to 1 when new item pushed into lineItems
    qty: { type: Number, default: 1 },
    item: foodItemSchema
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });

//   // Add an extPrice to the line item
// lineItemSchema.virtual('extPrice').get(function () {
//     // 'this' is bound to the lineItem subdocument
//     return this.tag_name * this.item.carbs;
//   });

// const selectedMealSchema = new Schema({
//     // An order belongs to a user
//     user: { type: Schema.Types.ObjectId, ref: 'User' },
//     // Embed an order's line items is logical
//     lineItems: [lineItemSchema],
//     // A user's unpaid order is their "cart"
//     isPaid: { type: Boolean, default: false },
//   }, {
//     timestamps: true,
//     toJSON: { virtuals: true }
//   });

  // Add the following helpful virtuals to order documents
// selectedMeal.virtual('selectedMealTotal').get(function () {
//     return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
//   });
  
//   selectedMealSchema.virtual('totalQty').get(function () {
//     return this.lineItems.reduce((total, item) => total + item.qty, 0);
//   });
  
//   selectedMealSchema.virtual('orderId').get(function () {
//     return this.id.slice(-6).toUpperCase();
//   });

  // statics are callable on the model, not an instance (document)
// selectedMealSchema.statics.getCart = function(userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
  //   return this.findOneAndUpdate(
  //     // query
  //     { user: userId, isPaid: false },
  //     // update - in the case the order (cart) is upserted
  //     { user: userId },
  //     // upsert option creates the doc if it doesn't exist!
  //     { upsert: true, new: true }
  //   );
  // };
  

  module.exports = mongoose.model('SelectedMeal', selectedMealSchema)