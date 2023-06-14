import React from "react";
import About from "../Components/HomeComponents/About/About";
import Benefits from "../Components/HomeComponents/Benefits/Benefits";
import Contact from "../Components/HomeComponents/Contact/Contact";
import Copyright from "../Components/HomeComponents/Footer/Copyright";
import Footer from "../Components/HomeComponents/Footer/Footer";
import Header from "../Components/HomeComponents/Header/Header";
import LatestNews from "../Components/HomeComponents/LatestNews/LatestNews";
import OurTeam from "../Components/HomeComponents/OurTeam/OurTeam";
import Services from "../Components/HomeComponents/Services/Services";
import Testimonials from "../Components/HomeComponents/Testimonials/Testimonials";
import Banner from "../Components/HomeComponents/Banner/Banner";
import NavBar from "../Components/HomeComponents/NavBar/NavBar";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Services />
      <About />
      <OurTeam />
      <LatestNews />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
    </main>
  );
};

export default Home;
