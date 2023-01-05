import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { CoinPage, ExchangesPage, Home } from "./pages"

function App() {
  const routes = [
    { path: "/*", element: <Home/>, id:0},
    { path: "/currency/:id", element: <CoinPage />, id: 1},
    { path: "/exchanges", element: <ExchangesPage />, id: 2}
  ]
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {routes.map(({path, element, id}) => (
          <Route path={path} element={element} key={id} /> 
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
