import './SearchBar.css'
import { FaSearch } from "react-icons/fa";

export default function SearchBar({placeholder, data}) {
  return (
   <div className='search'>
    <div className='searchInputs'>
        <input type="text" placeholder={placeholder} />
        {/* <FaSearch /> */}
    </div>
   </div>

  )
}
