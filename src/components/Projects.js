import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brenty from "../assets/brenty.png";
import manukatoprime from "../assets/manukatoprime.png";
import elite from "../assets/elite.png";

const projects = [
  {
    title: "Brenty",
    description: "Ecommerce, Sales, Product Purchase",
    image: brenty,
    link: "https://brenty.vercel.app/",
  },
  {
    title: "Luxury Scents",
    description: "Perfume, Elegance, Showcase",
    image: manukatoprime,
    link: "https://manukaato.netlify.app/",
  },
  {
    title: "Elite",
    description: "Construction, Home, RealEstate",
    image: elite,
    link: "https://eliteconstruction.netlify.app/",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center animate-bounce">My Projects</h2>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {projects.map((project, index) => (
            <div key={index} className="p-4" data-aos="fade-up">
              <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a href={project.link} className="text-blue-500 mt-4 inline-block">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
