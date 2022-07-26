import SearchBar from "../../components/SearchBar/SearchBar";
import { FaSearch } from "react-icons/fa";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";

export default function SelectMealPage() {
  return (
    <>
      <TypingAnimation />
      <SearchBar placeholder='Search...'/>
    </>
  );
}
