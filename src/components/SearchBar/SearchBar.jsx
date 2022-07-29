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
  data.forEach((foodItem, idx) => {
    let nutrition = {};
    nutrition.serving_unit = foodItem.serving_unit;
    nutrition.tag_name = foodItem.tag_name;
    nutrition.photo = foodItem.photo.thumb;
    console.log(foodItem.photo.thumb);
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
      {carbValue.map((item, idx) => {
        return <FoodInfo key={idx} item={item} />;
      })}
    </>
  );
}
