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
    </>
  );
}
