import Footer from "./Footer";

const Portfolio = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Project One",
      description: "A web application built with React.js and Node.js.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
      ],
    },
    {
      image: "https://via.placeholder.com/400",
      title: "Project Two",
      description: "An e-commerce platform with a MERN stack.",
      techStack: ["React.js", "Redux", "Firebase", "Stripe", "MongoDB"],
    },
    // Add more projects here
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[35vw] rounded-xl shadow-lg bg-gray-900 text-white overflow-hidden "
            >
              {/* Main Image */}
              <div className="h-52 w-full ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section (Title, Description, Tech Stack) */}
              <div className="p-4 bg-green-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-sm text-gray-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500 px-3 py-1 rounded-lg text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
