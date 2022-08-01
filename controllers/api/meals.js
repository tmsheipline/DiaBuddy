const Meal = require('../../models/Meal')
const express = require('express');
const router = express.Router();

// export function saveMeal(foodname, carbs) {
//     return sendRequest(`${BASE_URL}`, 'POST', { foodname, carbs });
//   }
  

async function create(req,res){
    try{
        console.log(`Save Meal`)
        const savedMeal = await Meal.create(req.body);
        console.log(`this is the saved meal ${savedMeal}`)
        res.json(savedMeal)
    } catch (e) {
        res.status(400).json(e)
    }
}


  module.exports = router;