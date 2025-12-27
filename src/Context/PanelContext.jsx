import { createContext, useEffect, useState } from "react";

const PanelContext = createContext()

const PanelContextProvider = ({ children }) => {

    const [userData, setUserData] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isDark, setIsDark] = useState(true)
    const [showSideMenu, setShowSideMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // manage DarkMode
    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])

    // Manage screen size 

    useEffect(() => {
        const resizeHandler = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        resizeHandler() 

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])


    return (
        <PanelContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn, isDark, setIsDark, showSideMenu, setShowSideMenu, isMobile }}>
            {children}
        </PanelContext.Provider>
    )
}

export default PanelContextProvider

export { PanelContext }