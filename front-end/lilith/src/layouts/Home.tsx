import { Navbar } from "../components/Navbar";
import { Galleries } from "../components/Galleries";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Galleries />
      <Footer />
    </div>
  );
};
