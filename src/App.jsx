import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import Header from "./Components/Header"
import PanelContextProvider from "./Context/PanelContext"



function App() {

  const route = useRoutes(routes)


  return (
    <>
      <PanelContextProvider>

        <div className="min-h-screen min-w-full bg-gradient-to-br from-[#FFF1DC] via-[#FFE3E6] to-[#F7D9F3] dark:from-[#0F1020] dark:via-[#1A1333] dark:to-[#24163F] font-MTNIrancell-DemiBold">

          {route}

        </div>

      </PanelContextProvider>
    </>
  )
}

export default App
