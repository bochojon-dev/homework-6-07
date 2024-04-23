import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Careers from "./pages/careers/Careers";
import Services from "./pages/services/Services";
import Blogpage from "./pages/blogpage/Blogpage";
import Contact from "./pages/contact/Contact";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
      <Routes>
        <Route path="http://localhost:3000/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="http://localhost:3000/careers" element={<Careers />} />
      </Routes>
      <Routes>
        <Route path="http://localhost:3000/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="http://localhost:3000/blog" element={<Blogpage />} />
      </Routes>
      <Routes>
        <Route path="http://localhost:3000/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
