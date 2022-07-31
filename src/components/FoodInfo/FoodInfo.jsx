import { useState, useEffect } from "react";
import "./FoodInfo.css";

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
    setMeal((current) => [...current, object]);
  };
  console.log(meal);

  //   return (
  //     <>
  //       <div className="foodinfo">
  //         <span className="foodname">{item.tag_name} </span>
  //         <br />
  //         <span>
  //           <img src={item.photo} alt="" />
  //         </span>
  //         <br />
  //         <span className="carbinfo">Carbrohydrates: {item.carbs}</span>
  //         <br />
  //         <span className="servinginfo">Serving Size: {item.serving_unit}</span>
  //         <br />
  //         {/* <button type="submit" onClick={addToMeal}> Add to Meal </button> */}
  //         <button
  //           type="submit"
  //           className="btn-outline-primary"
  //           onClick={() => addToMeal(item.tag_name, item.carbs)}
  //         >
  //           Add to Meal
  //         </button>
  //         {/* <button
  //           type="submit"
  //           onClick={removeMeal}
  //         >
  //           Remove from Meal
  //         </button> */}
  //         <hr />
  //       </div>
  //     </>
  //   );
  // }

  //   return (
  //     <>
  //       <div className="info">
  //         <div className="infoitem">
  //           <h5 className="card-title">{item.tag_name}</h5>
  //         <img src={item.photo} alt="..."></img>
  //         <h5 className="card-text">Carbrohydrates: {item.carbs}</h5>
  //         <button
  //           type="submit"
  //           className="btn-outline-primary"
  //           onClick={() => addToMeal(item.tag_name, item.carbs)}
  //         >
  //           Add to Meal
  //         </button>
  //       </div>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      {/* <div class="card-group">
      <div class="card">
        <img src={item.photo} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{item.tag_name}</h5>
          <p class="card-text">{item.carbs}</p>
          <p class="card-text"><small class="text-muted">{item.serving_size}</small></p>
        </div>
      </div>
    </div> */}

      {/* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={item.photo}alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.tag_name}</h5>
        <h4 className="card-title">{item.carbs}</h4>
        <p class="card-text">{item.serving_size}</p>
      </div>
    </div>
  </div>
  </div> */}
    <div className="allData">
      <ul className="api-data">
        <li>{item.tag_name}</li>
        <li>Carbrohydrates: {item.carbs}</li>
        <li>{item.serving_size}</li>
        <li>
          <img src={item.photo} alt="" />
        </li>
        <li>
          <button
            type="submit"
            className="btn-sm"
            onClick={() => addToMeal(item.tag_name, item.carbs)}
          >
            Add to Meal
          </button>
        </li>
      </ul>
      </div>
    </>
  );
}

{
  /* <div className="card" style="width: 18rem;">
  <img src={item.photo} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{item.tag_name}</h5>
    <p className="card-text">{item.carbs}</p>
    <button type="submit"
          className="btn-outline-primary"
          onClick={() => addToMeal(item.tag_name, item.carbs)}
        >
          Add to Meal</button>
  </div>
</div>  */
}
