import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [city, setCity] = useState("Debrecen");

  const handleSearch = (cityName: string) => {
    setCity(cityName);
    console.log("Searching for:", cityName);

    // Here you can trigger your fetch
    // fetchWeather(cityName);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
    </>
  );
}
