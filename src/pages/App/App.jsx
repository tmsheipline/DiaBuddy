import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import MealHistoryPage from "../../pages/MealHistoryPage/MealHistoryPage"
import SelectMealPage from "../SelectMealPage/SelectMeal";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      {/* {user ? ( */}
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <NavBar />
          <Routes>
            <Route path="/" element={<SelectMealPage  />} />
            <Route path='/mealhistory' element={<MealHistoryPage />} />
          </Routes>
        </>
        {/* <AuthPage /> */}

    </main>
  );
}
