import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Landing from './pages/Landing/Landing'
import Map from './pages/Map/Map'
import Search from './pages/Search/Search'
import Footer from './components/Footer/Footer'
import InfoAI from './pages/InfoAI/InfoAI'
import Admin from './pages/Admin/Admin'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />}>
              <Route path=":category" element={<Map />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/infoai" element={<InfoAI />}> 
              <Route path=":infoai:id" element={<InfoAI />} /> 
            </Route> 
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
