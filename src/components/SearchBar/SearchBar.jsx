import './SearchBar.css'
import {useState} from 'react'
import { FaSearch } from "react-icons/fa";

export default function SearchBar({placeholder, query,setQuery}) {

  const [search, setSearch] = useState('')


  function handleChange(e){
    setQuery(e.target.value)
  }

  return (
   <div className='search'>
    <div className='searchInputs'>
        <input type="text" onChange={handleChange} placeholder={placeholder} />
        <button><FaSearch /></button>
        
    </div>
   </div>

  )
}
