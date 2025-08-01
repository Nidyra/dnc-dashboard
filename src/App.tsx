import { BrowserRouter as Router,Route, Routes } from "react-router-dom"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/cadastro" element={<>CADDASTRO</>} />
        <Route path="/leads" element={<>LEADS</>} />
        <Route path="/perfil" element={<>PERFIL</>} />
        <Route path="/home" element={<>HOME</>} />
      </Routes>
    </Router>
  )
}

export default App
