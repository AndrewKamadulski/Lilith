import { useState } from "react";
import { ArtYouCanEnjoy } from "../components/ArtYouCanEnjoy";
import { Hero } from "../components/Hero";
import { About } from "./About";

export const Home = () => {
    return (
    <div>
      <Hero />
      <ArtYouCanEnjoy />
      <About />
    </div>
  );
};
