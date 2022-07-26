import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import MealHistoryPage from "../MealHistoryPage/MealHistory";
import SelectMealPage from "../SelectMealPage/SelectMeal";
import NavBar from "../../components/NavBar/NavBar";
// import SelectMeal from "../SelectMealPage/SelectMeal";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
           {/* <TypingAnimation /> */}
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
