import { useState,useEffect } from "react";
import "./Meal.css"


export default function Meal({ item, meal, setMeal }) {
    const [updated, setUpdated] = useState(false)
    let tempMeal = meal;
    useEffect(() => {setMeal(tempMeal)}, [updated]);
    function removeItem(key) {
        tempMeal.splice(key, 1); 
        setUpdated(!updated)
        console.log(tempMeal);
    }

  return (
    <>
    <div className="meal-container">
      <h4>My Meal</h4>
      <div>
        {meal.map((item, key) => (
          <div key={key}>
            {item.foodname} - Carbs: {item.carbs}
            <button className="btn-sm" onClick={() => removeItem(key)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="btn btn-lg">
          Calculate Total Carbs
        </button>
        {/* <form action="" method="POST">
            <input type="hidden" name="itemfoodname" />
            <input type="hidden" name="itemcarbs"/>
        <button type="submit" className="btn btn-lg">Save Meal
        </button>
        </form> */}
      </div>
      </div>
    </>
  );
}
