import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Servicios from './pages/Servicios'

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Inicio</Link>{' '}
        <Link to="/servicios">Servicios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </HashRouter>
  )
}

export default App
