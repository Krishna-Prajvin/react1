import "./styles.css";

import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Faq from "./routes/faq";
import Sponsors from "./routes/sponsors";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}
