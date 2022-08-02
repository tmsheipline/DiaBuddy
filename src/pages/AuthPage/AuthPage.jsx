import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import './AuthPage.css';
import Logo from '../../components/Logo/Logo'

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
    return (
      <main className="AuthPage">
        <Logo />
        <h3 className="tagline">The carb counter app made for Diabetics who count carbs!</h3>
        <br />
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        <h4 onClick={() => setShowLogin(!showLogin)}>{showLogin ?  <button>Dont have an account? Create Account</button> : <button>Log In</button>}</h4>
      </main>
    );
  }