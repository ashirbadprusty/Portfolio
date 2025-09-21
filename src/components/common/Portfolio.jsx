import React from "react";
import Footer from "./Footer";
import PortfolioImage from "../../assets/Projects/portfolio-ashirbadprusty.jpeg";
import ReactTodoList from "../../assets/Projects/react-todo-list.jpeg";
import RestuarantPage from "../../assets/Projects/Resturant_page.jpeg";
import Responisvepage from '../../assets/Projects/simple-web-page-responsive.jpeg';

const projects = [
  {
    title: "Restuarant Website",
    description: "A full-stack e-commerce app using MERN stack.",
    image: RestuarantPage,
    link: "https://ashirbadprusty.github.io/Resturant-land-page",
  },
  {
    title: "Adventure Website",
    description: "A real-time chat application using Socket.IO and MongoDB.",
    image: Responisvepage,
    link: "https://simple-web-page-responsive.vercel.app",
  },
  {
    title: "Portfolio",
    description: "A portfolio website built with React and Tailwind CSS.",
    image: PortfolioImage,
    link: "https://portfolio-ashirbadprustys-projects.vercel.app",
  },
  {
    title: "Project One",
    description: "A full-stack e-commerce app using MERN stack.",
    image: PortfolioImage,
    link: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "A real-time chat application using Socket.IO and MongoDB.",
    image: PortfolioImage,
    link: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "A portfolio website built with React and Tailwind CSS.",
    image: PortfolioImage,
    link: "https://example.com/project3",
  },
  {
    title: "Project One",
    description: "A full-stack e-commerce app using MERN stack.",
    image: PortfolioImage,
    link: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "A real-time chat application using Socket.IO and MongoDB.",
    image: PortfolioImage,
    link: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "A portfolio website built with React and Tailwind CSS.",
    image: PortfolioImage,
    link: "https://example.com/project3",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen  text-white">
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice().reverse().map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 "
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/300x200")
                }
              />{" "}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
