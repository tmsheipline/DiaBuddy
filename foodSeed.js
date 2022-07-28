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
          {
            name: "Chow Mein",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2GdzhxPbn6PCAoIvpO9MRCcGI8gcrmOlXw&usqp=CAU",
          brand: "Panda" ,
          carbs: 61 ,
          },
          {
            name: "Fried Rice",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZwyRhhnv_GeSgUEOu7Q7zE7OwZcO1tO7w&usqp=CAU",
          brand: "Panda" ,
          carbs: 82 ,
          },
          {
            name: "Sweet & Sour Chicken Breast",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtCDirSWzIdv6yGyHuTi_WWS7otTw6KzieA&usqp=CAU",
          brand: "Panda" ,
          carbs: 40 ,
          },
          {
            name: "Honey Walnut Shrimp",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuE84eV6LLn2zJEiQyZxudBAsOrE3io4iQJQ&usqp=CAU",
          brand: "Panda" ,
          carbs: 27 ,
          },
          {
            name: "Veggie Spring Roll ",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJIU7kRkUvNyEGmI4Xdt6VqlDdKjQLvkR_A&usqp=CAU",
          brand: "Panda" ,
          carbs: 22 ,
          },
        
         ]);

  process.exit();

})();