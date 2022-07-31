import { useState,useEffect } from "react";


export default function Meal({ item, meal, setMeal }) {
    const [updated, setUpdated] = useState(false)
    let tempMeal = meal;
    useEffect(() => {setMeal(tempMeal)}, [updated]);
    function removeItem(key) {
        tempMeal.splice(key, 1); 
        setUpdated(!updated)
        // setTimeout(setMeal(tempMeal), 1000)
        console.log(tempMeal);
        // setMeal(tempMeal.splice(key, 1));
        // console.log(key);
    }
  
//   function removeItem(key) {
//     let tempMeal = meal;
//     tempMeal = tempMeal.filter(key, 1);
//     console.log(tempMeal);
//     // setMeal(tempMeal.splice(key, 1));
//     // console.log(key);
//   }
  return (
    <>
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
        <button type="button" className="btn btn-sm">
          Calculate Total Carbs
        </button>
      </div>
    </>
  );
}
