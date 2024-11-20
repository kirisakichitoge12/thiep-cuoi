import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./layouts/Navbar"
import Modal from "./components/Modals/Modal"

function App() {

  return (
    
    <Routes location={location}>
      <Route path="/" element={<Navbar />}>
          <Route path="home" index element={<Home />} /> 
      </Route>
    </Routes>
  )
}

export default App
