import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Landing from "./pages/Landing/Landing";
import Map from "./pages/Map/Map";
import Search from "./pages/Search/Search";
import InfoAI from "./pages/InfoAI/InfoAI";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer/Footer";
import GitHubAi from "./pages/GitHubAI/GitHubAI";
import InfoGitHub from "./pages/InfoGitHub/InfoGitHub";
import CreateAITechnology from "./pages/AddAiTool/AddAiTool";
import ListAITools from "./pages/ListAITools/ListAITools";
import UpdateAITechnology from "./pages/UpdateAiTool/UpdateAiTool";
import Licencias from "./pages/Licencias/Licencias";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
            <Route path="/search" element={<Search />} />
            <Route path="/infoai/:id" element={<InfoAI />} />
            <Route path="/infoai" element={<InfoAI />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/licencias" element={<Licencias />} />
            <Route path="/githubai" element={<GitHubAi />} />
            <Route path="/infogithub/:repo/:owner" element={<InfoGitHub />} />
            <Route path="/addaitool" element={<CreateAITechnology />} />
            <Route
              path="listaitools/updateaitool/:aiTechnologyId"
              element={<UpdateAITechnology />}
            />
            <Route path="/listaitools" element={<ListAITools />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
