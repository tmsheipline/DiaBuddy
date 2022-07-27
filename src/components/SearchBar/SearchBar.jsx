import './SearchBar.css'
import {useState} from 'react'
import { FaSearch } from "react-icons/fa";

export default function SearchBar({placeholder, data}) {

  const [query, setQuery] = useState('');

  return (
   <div className='search'>
    <div className='searchInputs'>
        <input type="text" placeholder={placeholder} />
        <button><FaSearch /></button>
        
    </div>
   </div>

  )
}
