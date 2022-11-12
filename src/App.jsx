import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Proyects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>

     </div>
  );
}

export default App;
