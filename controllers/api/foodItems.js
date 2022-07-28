const foodItem = require('../../models/foodItem');

module.exports = {
  index,
  show,
  // getAll,
};

// async function getAll(req,res){
//   const allItems = await foodItem.find({},(error,data)=> {
//     if (error){
//       console.log(error)
//       res.json(error)
//     } else {
//       res.json(data)
//     }
//   })
// }

async function index(req, res) {
  const foodItems = await foodItem.find({}).sort('name').populate('brand').exec();
  // re-sort based upon the sortOrder of the categories
  foodItems.sort((a, b) => a.brand.sortOrder - b.brand.sortOrder);
  res.json(foodItems);
}

async function show(req, res) {
  const foodItem = await foodItem.findById(req.params.id);
  res.json(foodItem);
}
