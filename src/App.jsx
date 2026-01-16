import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#0f0f0f] pt-24">
      <Navbar />
      <Hero />
      <Programs />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
