import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import Header from "./Components/Header"
import PanelContextProvider from "./Context/PanelContext"



function App() {

  const route = useRoutes(routes)


  return (
    <>
      <PanelContextProvider>
        {route}
      </PanelContextProvider>
    </>
  )
}

export default App
