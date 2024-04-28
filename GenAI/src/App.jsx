import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Landing from "./pages/Landing/Landing";
import Map from "./pages/Map/Map";
import Search from "./pages/Search/Search";
import InfoAI from "./pages/InfoAI/InfoAI";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/search" element={<Search />} />
          <Route path="/infoai/:id" element={<InfoAI />} />
          <Route path="/infoai" element={<InfoAI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
