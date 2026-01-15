import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import ShowCase from "./components/ShowCase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerEase(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
}
export default App