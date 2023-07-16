import { Navbar } from "../components/Navbar";
import { Galleries } from "../components/Galleries";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Galleries />
    </div>
  );
};
