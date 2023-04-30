import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Page/Contact";
import { Home } from "./Page/Home";
import { Services } from "./Components/Services";
import { Moreproject } from "./Components/Moreproject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Moreproject />} />
      </Routes>
    </Router>
  );
}

export default App;
