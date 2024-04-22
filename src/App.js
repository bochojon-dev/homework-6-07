import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
