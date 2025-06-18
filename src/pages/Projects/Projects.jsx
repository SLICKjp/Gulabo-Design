import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Proj from "../../components/Proj/Proj"

const Projects = () => {
  return (
    <>
      <div className="home-container">
        <Navbar/>
      </div>
      <Proj/>
    </>
  );
};

export default Projects;
