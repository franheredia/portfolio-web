import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Servicios from './pages/Servicios'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </HashRouter>
  )
}

export default App
