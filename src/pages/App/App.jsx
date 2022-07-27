import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import MealHistoryPage from "../MealHistoryPage/MealHistory";
import SelectMealPage from "../SelectMealPage/SelectMeal";
import NavBar from "../../components/NavBar/NavBar";
import * as foodsAPI from '../../utilities/foodItems-api'



export default function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() =>{ 
    (async () => {
      const allItem = await foodsAPI.getAll()
      console.log(allItem)
    })()
  }, []
  )


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<SelectMealPage />} />
            <Route path="/selectmeal" element={<MealHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
