import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import MealHistoryPage from "../../pages/MealHistoryPage/MealHistoryPage"
import SelectMealPage from "../SelectMealPage/SelectMeal";
import NavBar from "../../components/NavBar/NavBar";
import * as foodsAPI from '../../utilities/foodItems-api'
import FiveGuysPage from "../FiveGuysPage/FiveGuysPage";
import Mcdonaldspage from "../Mcdonalds/Mcdonaldspage";
import FavoriteRestuarantPage from "../FavoriteRestaurantPage/FavoriteRestuarantPage";




export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<SelectMealPage />} />
            <Route path="/favrest" element={<FavoriteRestuarantPage/>} />
            {/* <Route path="/fiveguys" element={<MealHistoryPage/>}/> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
