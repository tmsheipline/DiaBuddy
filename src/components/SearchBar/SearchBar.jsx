import "./SearchBar.css";
import { useState} from "react";
import { FaSearch } from "react-icons/fa";
import FoodInfo from "../FoodInfo/FoodInfo";
import Meal from "../Meal/Meal";

export default function SearchBar({ placeholder, query, setQuery, user }) {
  const [search, setSearch] = useState("");

  const [meal, setMeal] = useState([]);

  // console.log(user)

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

  let carbValue = [];
  data.forEach((foodItem, idx) => {
    let nutrition = {};
    nutrition.serving_unit = foodItem.serving_unit;
    nutrition.tag_name = foodItem.tag_name;
    nutrition.photo = foodItem.photo.thumb;
    // console.log(foodItem.photo.thumb);
    foodItem.full_nutrients.map((value) => {
      if (value.attr_id === 205) {
        nutrition.carbs = parseInt(value.value);
      }
    });
    carbValue.push(nutrition);
  });
  return (
    <>
          <input
            type="text"
            onChange={handleChange}
            placeholder={placeholder}
          />
          <button onClick={apiGet}>
            <FaSearch />
          </button>
      <div className="search">
          <aside className="meal">
          <Meal meal={meal} setMeal={setMeal} user={user}/>
          <hr />
        </aside>
      <div>
        <div className="allData">
      {carbValue.map((item, idx) => {
        return <FoodInfo key={idx} item={item} user={user} meal={meal} setMeal={setMeal} />;
      })}
      </div>
      </div>
      </div>
    </>
  );
}
