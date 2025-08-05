import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import {Home, Leads, Profile, Login, Registration} from './pages'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path="/leads" element={<Leads/>} />
        <Route path="/perfil" element={<Profile/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
