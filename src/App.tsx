import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Superpowers from "./pages/Superpowers";
import Missions from "./pages/Missions";
import Contact from "./pages/Contact";
import { profile } from "./content";

function SiteNav() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand-mark">
        {profile.name}
      </NavLink>

      <nav className="site-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/superpowers">Skill</NavLink>
        <NavLink to="/missions">Project</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/superpowers" element={<Superpowers />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="web-bg" />
      <SiteNav />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
