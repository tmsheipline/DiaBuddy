import SearchBar from "../../components/SearchBar/SearchBar";
import { FaSearch } from "react-icons/fa";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import RenderApi from '../../components/RenderAPI/RenderAPI'

export default function SelectMealPage() {
  return (
    <>
      <TypingAnimation />
      <SearchBar placeholder='Search...'/>
      <RenderApi />
      {/* <div className="image-grid">
        <img src="/DiabuddyLogo.png" alt="" />
        <img src="https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-16-1200x750.png" alt="" />
        <img src="https://fabrikbrands.com/wp-content/uploads/Famous-Fast-Food-Logos-6-1200x750.png" alt="" />
      </div> */}
    </>
  );
}
