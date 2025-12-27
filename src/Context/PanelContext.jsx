import { createContext, useEffect, useState } from "react";

const PanelContext = createContext()

const PanelContextProvider = ({ children }) => {

    const [userData, setUserData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isDark, setIsDark] = useState(true)

    // manage DarkMode
    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])

    return (
        <PanelContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn, isDark, setIsDark }}>
            {children}
        </PanelContext.Provider>
    )
}

export default PanelContextProvider

export { PanelContext }