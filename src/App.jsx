import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Home from './pages/Home'
import TypeRacer from './pages/TypeRacer'
import Contact from './pages/Contact'
import About from './pages/About'


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className= {`App ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home mode={darkMode ? "dark" : "light"} />} />
          <Route path="/about" element={<About mode={darkMode ? "dark" : "light"} />} />
          <Route path="/type-racer" element={<TypeRacer mode={darkMode ? "dark" : "light"} />} />
          <Route path="/contact" element={<Contact mode={darkMode ? "dark" : "light"} />} />

        </Routes>
      </div>
    </Router>
  );
}

function Navbar({darkMode, toggleDarkMode}) {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "TypeRacer", path: "/type-racer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className = "navbar">
      <div className="nav-links">
        {links.map(link => 
          <div key={link.path} className="nav-link-wrapper">
            <Link to={link.path} className="nav-link">
              {link.name}
              {location.pathname === link.path && (
                <motion.div className="nav-indicator" layoutId="nav-indicator" transition={{type: "spring", stiffness: 500, damping: 30 }} />
              )}
            </Link>          
          </div>
        )}
      </div>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default App;
