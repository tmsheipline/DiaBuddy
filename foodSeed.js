require('dotenv').config();
require('./config/database');

// const Brand = require('./models/brand');
const FoodItem = require('./models/foodItem');

// IIFE - Immediately Invoked Function Expression
(async function() {

  await FoodItem.deleteMany({});
  const foodItems = await FoodItem.create([
        {
          name: "Double Cheeseburger",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_puxqVgitEa7_F-13Y--gjd7W4A7fx8INQ&usqp=CAU",
        brand: "Five Guys",
        carbs: 39 ,
        },
        {
            name: "Little Fries",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31LKNkVnoLw-1kxnaZnVRtPB7sAly8uZcFA&usqp=CAU",
          brand: "Five Guys" ,
          carbs: 72 ,
          },
          {
            name: "Regular Fries",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31LKNkVnoLw-1kxnaZnVRtPB7sAly8uZcFA&usqp=CAU",
          brand: "Five Guys" ,
          carbs: 131 ,
          },
          {
            name: "Large Fries",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31LKNkVnoLw-1kxnaZnVRtPB7sAly8uZcFA&usqp=CAU",
          brand: "Five Guys" ,
          carbs: 181 ,
          },
        
         ]);

  process.exit();

})();