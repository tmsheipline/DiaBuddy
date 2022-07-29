import "./SearchBar.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RenderAPI from "../../components/API/RenderAPI";
import FoodInfo from "../FoodInfo/FoodInfo";
import Meal from "../Meal/Meal";

export default function SearchBar({ placeholder, query, setQuery }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&branded=false&detailed=true`,
      {
        headers: {
          "x-app-id": "fc7518c6",
          "x-app-key": "f167b58e25c39e81c5d8bff3a9c546bd",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.common);
        setData(json.common);
      });
  };
  // console.log(data)
  // let nutrientVal;
  // // let getFoodName
  // if (data) {
  //   let nutrients = data[0].full_nutrients;
  //   // let getFoodName = data;
  //   //  console.log(data.common[0].food_name)
  //   for (let i = 0; i < nutrients.length; i++) {
  //     // console.log(nutrient.attr_id)
  //     if (nutrients[i].attr_id === 205) {
  //       nutrientVal = nutrients[i].value;
  //     }
  //   }
  //   console.log(nutrientVal);

  //  let foodName = data.common[0].food_name
  //  console.log(foodName)
  //  for (let f = 0; f < data.common.length; f++){
  //   // console.log(nutrient.attr_id)
  //     getFoodName[f] = foodName
  //   }
  //   console.log(getFoodName)
  // }

  // data.common[0].food_name

// working
// let carbValue = [];
//   data.forEach((foodItem) => {
//     let nutrition = {};
//     nutrition.tag_name = foodItem.tag_name;
//     foodItem.full_nutrients.map((value) => {
//       if (value.attr_id === 205) {
//         nutrition.carbs = value.value;
//       }
//     });
//     carbValue.push(nutrition);
//   });

  let carbValue = [];
  data.forEach((foodItem) => {
    let nutrition = {};
    nutrition.tag_name = foodItem.tag_name;
    // nutrition.photo.thumb = foodItem.photo.thumb
    foodItem.full_nutrients.map((value) => {
      if (value.attr_id === 205) {
        nutrition.carbs = parseInt(value.value);
      }
    });
    carbValue.push(nutrition);
  });

  return (
    <>
    
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            onChange={handleChange}
            placeholder={placeholder}
          />
          <button onClick={apiGet}>
            <FaSearch />
          </button>
          <Meal />
          <hr />
        </div>
      </div>
      {carbValue.map((item)=>{
        return <FoodInfo item={item} />
      })}
    </>
  );
}
