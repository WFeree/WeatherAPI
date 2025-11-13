import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function Searchbar({ onSearch }: SearchBarProps){
  const [city, setCity] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };
  return(
    <>
      <form onSubmit={handleSubmit} className="w-full min-h-fit bg-gray-100 border border-gray-200 p-2 rounded-lg flex f gap-2 focus-within:ring-2 ring-gray-300/20">
        <Search color="#6b6b6b"/>
        <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" placeholder="Enter city..." className="w-full focus:outline-0"/>
        <button type="submit" className="bg-gray-200 px-2 rounded hover:cursor-pointer">Search</button>
      </form>
    </>
  )
}