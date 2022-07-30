import { useState, useEffect } from "react";

export default function FoodInfo({ item, meal, setMeal }) {
  //   console.log(item);
  const [itemName, setItemName] = useState([]);
  const [carbAmount, setCarbAmount] = useState([]);
//   const [meal, setMeal] = useState([]);
  let meals = [];
  
  useEffect(() => {}, []);
  
  const addToMeal = (e, a) => {
      // setMeal([...meal, e,a]);
      // setItemName(e)
      // setCarbAmount(a)
      const object = {
          foodname: e,
          carbs: a,
        };
        // console.log(object);
        meals.push(object);
        setMeal(current =>[...current, object])
    };
    console.log(meal);

  return (
    <>
      <div className="foodinfo">
        <span>
          <img src={item.photo} alt="" />
        </span>
        <br />
        <span className="foodname">{item.tag_name} </span>
        <br />
        <span className="servinginfo">Serving Size: {item.serving_unit}</span>
        <br />
        <span className="carbinfo">Carbrohydrates: {item.carbs}</span>
        {/* <button type="submit" onClick={addToMeal}> Add to Meal </button> */}
        <button
          type="submit"
          onClick={() => addToMeal(item.tag_name, item.carbs)}
        >
          Add to Meal
        </button>
        <hr />
      </div>
    </>
  );
}
