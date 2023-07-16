import { Navbar } from "../components/Navbar";
import { Galleries } from "../components/Galleries";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { About } from "./About";


export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};
