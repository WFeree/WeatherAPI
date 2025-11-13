import Searchbar from "./Searchbar"
import ThemeSwitcher from "./ThemeSwitcher"

interface NavbarProps {
  onSearch: (value: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps){
  return (
    <>
      <nav className="w-full h-fit max-h-14 p-4 flex flex-col sm:flex-row items-center gap-4">
        <img src="/logos/light_logo.svg" className="h-8"/>
        <div className="w-full flex gap-2 sm:gap-4">
          <Searchbar onSearch={onSearch}/>
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  )
}