import SearchBar from "../../components/SearchBar/SearchBar";
// import { FaSearch } from "react-icons/fa";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import RenderApi from "../../components/API/RenderAPI";
import "./SelectMealPage.css";
import { Link } from "react-router-dom";
import { useState} from 'react'
import Meal from '../../components/Meal/Meal'


export default function SelectMealPage({user}) {

  const [data, setData] = useState();
  const [query, setQuery] = useState('');

  return (
    <>
      <TypingAnimation />
      <SearchBar placeholder="Search..." query={query} setQuery={setQuery} user={user} />
    </>
  );
}
