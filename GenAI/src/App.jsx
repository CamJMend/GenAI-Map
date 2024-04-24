import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Landing from './pages/Landing/Landing'
import Map from './pages/Map/Map'
import Search from './pages/Search/Search'
import InfoAI from './pages/InfoAI/InfoAI'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
