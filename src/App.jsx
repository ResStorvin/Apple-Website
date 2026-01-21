import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import ShowCase from "./components/ShowCase";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/Footer";

gsap.registerEase(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Highlights />
      <Features />
      <Footer /> 
    </main>
  );
}
export default App