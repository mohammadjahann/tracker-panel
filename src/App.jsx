import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import Header from "./Components/Header"



function App() {

  const route = useRoutes(routes)


  return (
    <>
      {route}
    </>
  )
}

export default App
