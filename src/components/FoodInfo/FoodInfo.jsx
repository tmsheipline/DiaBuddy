import { useState } from "react";

export default function FoodInfo({ item }) {
//   console.log(item);
const [meal,setMeal] = useState([])
const addToMeal = (el) => setMeal( [...meal, el]);
console.log(meal)
  return (
    <>
      <div className="foodinfo">
        <span><img src={item.photo}alt="" /></span>
        <br />
        <span className="foodname">{item.tag_name} </span>
        <br />
        <span className="servinginfo">Serving Size: {item.serving_unit}</span>
        <br />
        <span className="carbinfo">Carbrohydrates: {item.carbs}</span>
        <button type="submit" onClick={() => addToMeal(item.tag_name)}>Add to Meal</button>
        <hr />
      </div>
    </>
  );
}
