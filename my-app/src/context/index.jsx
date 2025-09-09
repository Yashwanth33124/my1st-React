import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

function  GlobalState({children}) {
    const[Theme,setTheme] = useState("light")
    return <GlobalContext.Provider value={{Theme,setTheme}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState