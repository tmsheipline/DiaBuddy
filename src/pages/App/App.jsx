import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';
import MealHistoryPage from '../MealHistoryPage/MealHistory';
import SelectMealPage from '../SelectMealPage/SelectMeal';

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/selectmeal/new" element={<SelectMealPage />} />
          <Route path="/selectmeal" element={<MealHistoryPage />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
