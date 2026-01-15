import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0f0f0f]">
      <Navbar />
      <Hero />
      <Programs />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
