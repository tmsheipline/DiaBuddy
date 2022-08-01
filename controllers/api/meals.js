const Meal = require('../../models/Meal')
const router = express.Router();

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