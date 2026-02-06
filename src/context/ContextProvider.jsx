import { createContext, useState } from "react";


 export const themeContext = createContext()

  

 
 export default function ContextProvider({children}) {
    const [theme , setTheme] = useState("light")
     function handleTheme(){
        setTheme(prev=> prev ==="light"?"dark":"light")
     }
   return (
    <themeContext.Provider value={{theme , handleTheme}}>
        {children}
    </themeContext.Provider>
   )
 }
 