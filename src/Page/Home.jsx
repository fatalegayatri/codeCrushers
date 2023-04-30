import { React } from "react";
import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import { Project } from "../Components/Project";
import { Services } from "../Components/Services";
import { Footer } from "../Components/Footer";
export const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Project />
      <Services />
      <Footer />
    </div>
  );
};
