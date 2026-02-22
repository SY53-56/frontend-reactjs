import { createContext, useContext, useState } from "react";


 export const ThemeContext = createContext(null)

  

 
 export default function ContextProvider({children}) {
    const [theme , setTheme] = useState("light")
     function handleTheme(){
        setTheme(prev=> prev ==="light"?"dark":"light")
     }
   return (
    <ThemeContext.Provider value={{theme , handleTheme}}>
        {children}
    </ThemeContext.Provider>
   )
 }
export const useTheme = () => useContext(ThemeContext);