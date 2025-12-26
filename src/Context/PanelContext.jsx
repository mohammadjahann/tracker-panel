import { createContext, useState } from "react";

 const PanelContext = createContext()

 const PanelContextProvider = ({children})=>{

    const [userData,setUserData] = useState()
    const [isLoggedIn,setIsLoggedIn]= useState(true)

    return (
        <PanelContext.Provider value={{userData,setUserData,isLoggedIn,setIsLoggedIn}}>
            {children}
        </PanelContext.Provider>
    )
}

export default PanelContextProvider

export {PanelContext}