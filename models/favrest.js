const mongoose = require('mongoose');
const {Schema, model} = mongoose

const favRestSchema = new Schema({
    image: {type: String},
  });


const FavRest = model('FavRest', favRestSchema)
  
  module.exports = FavRest