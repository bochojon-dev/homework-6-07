import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Blog />
    </div>
  );
}

export default App;
