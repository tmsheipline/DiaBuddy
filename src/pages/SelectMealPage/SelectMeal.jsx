import SearchBar from "../../components/SearchBar/SearchBar";
// import { FaSearch } from "react-icons/fa";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import RenderApi from "../../components/API/RenderAPI";
import "./SelectMealPage.css";
import { Link } from "react-router-dom";
import { useState} from 'react'
import Meal from '../../components/Meal/Meal'


export default function SelectMealPage() {

  const [data, setData] = useState();
  const [query, setQuery] = useState('');

  const apiGet = () => {
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=mcdonalds&branded=false&detailed=true`,{
      headers: {
              "x-app-id": "fc7518c6",
              "x-app-key": "f167b58e25c39e81c5d8bff3a9c546bd",
              "Content-Type":'application/json',
              },})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json)
      });
  };

  return (
    <>
      <TypingAnimation />
      <SearchBar placeholder="Search..." query={query} setQuery={setQuery} />
      {/* <div className="imagegridcontainer">
        <div className="imagegrid">
          <Link to="/fiveguys">
            <button>
              <img
                src="https://you.com/proxy?url=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Vw6vFMWTMASV6EdNQJHIRgHaEK%26pid%3DApi"
                alt="Five Guys"
              />
            </button>
          </Link>
        <Link to='/mcdonalds'>
          <button onClick={apiGet}>
            <img
              src="https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AANuGoW1uBdgmlr54kdG2AHaHa%26pid%3DApi"
              alt="Mcdonalds"
              
            />
          </button>
          </Link>
          <button>
            <img
              src="https://www.listchallenges.com/f/items/f609ed23-6ca5-43b8-8121-2a7a1bccc556.jpg"
              alt="tacobell"
            />
          </button>
          <button>
            <img
              src="https://www.listchallenges.com/f/items/a264767d-ae9b-42eb-b335-f4dd567e3a01.jpg"
              alt="kfc"
            />
          </button>
          <button>
            <img
              src="https://you.com/proxy?url=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.71G_nqO45Wh-bJZPCbfdlwHaHa%26pid%3DApi"
              alt="wendys"
            />
          </button>
          <button>
            <img
              src="https://www.listchallenges.com/f/items/a732fe42-1476-4eba-b166-41f8c6283c7f.jpg"
              alt="burgerking"
            />
          </button>
          <button>
            <img
              src="https://you.com/proxy?url=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RY-Kx8T9VqfDUPMvHgAq1gHaHa%26pid%3DApi"
              alt="panda"
            />
          </button>
          <button>
            <img
              src="https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MY0Agu9meLTi9PnRJpI5MAHaEj%26pid%3DApi"
              alt="panera"
            />
          </button>
          <button>
            <img
              src="https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nZO7vCdNlGEEUwJGVLGRhwHaHX%26pid%3DApi"
              alt="grindstone"
            />
          </button>
        </div>
      </div> */}
      {/* <RenderApi query={query} /> */}
    </>
  );
}
