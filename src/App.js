import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";
import Services from "./pages/services/Services";
import Blogpage from "./pages/blogpage/Blogpage";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import NotFound from "./pages/notFound/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
