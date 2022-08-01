import { useEffect } from "react";
import "./FoodInfo.css";

export default function FoodInfo({ item, meal, setMeal, user }) {
  let meals = [];

  useEffect(() => {}, []);

  const addToMeal = (e, a) => {
    const object = {
      foodname: e,
      carbs: a,
      userId: user._id,
    };
    // console.log(object);
    meals.push(object);
    setMeal((current) => [...current, object]);
  };
  // console.log(meal);

  return (
    <>
    <div className="allData">
      <div className="api-data">
        <div>{item.tag_name}</div>
        <div>Carbrohydrates: {item.carbs}</div>
        <div>{item.serving_size}</div>
        <div>
          <img src={item.photo} alt="" />
        </div>
        <div>
          <button
            type="submit"
            className="btn-sm"
            onClick={() => addToMeal(item.tag_name, item.carbs)}
          >
            Add to Meal
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
