import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function ThemeSwitcher(){
  //true: light - false:dark
  const [theme, setTheme] = useState(true)
  const buttonHandler = () => {
    setTheme(prev => !prev)
  }
  return(
    <>
      <button className='w-fit h-full bg-gray-100 border border-gray-200 rounded-lg flex gap-2' onClick={buttonHandler}>
        {theme ? 
        <button className='w-full h-full cursor-pointer m-2'><Moon/></button>
        :
        <button className='w-full h-full cursor-pointer m-2'><Sun/></button>}
      </button>
    </>
  )
}
  