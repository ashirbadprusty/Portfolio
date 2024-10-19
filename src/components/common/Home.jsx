import React from "react";
import TypewriterComponent from "typewriter-effect";
import Footer from "./Footer";
import Emoji from "../../assets/emoji.png";
import Background from "../../assets/background.png";

const Home = () => {
  const sections = [
    {
      id: 0,
      title: 'Full Stack Development',
      desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
      id: 1,
      title: 'Scrum and Jira',
      desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
      id: 2,
      title: 'Designing (UI/UX)',
      desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
      id: 3,
      title: 'Github',
      desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      desc: "Open Source is the future. I usually take some time on weekends to contribute to open source projects. It gives me the opportunity to learn from the best developers' practices and also allows me to help others and contribute to the community for the good.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
        {/* Badge Section */}
        <div className="relative flex items-center justify-center w-full h-full p-8 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center blur-md"
            style={{ backgroundImage: `url(${Background})` }}
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full bg-DarkGray/60 p-6 rounded-xl z-10">
            <div className="text-center md:text-left w-full md:w-[50vw]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-Snow font-bold mb-4">
                Hello, Check This Out!
              </h1>
              <div className="font-cascadia text-Snow text-xs sm:text-sm md:text-base lg:text-lg space-y-2">
                <span>
                  {"<"}<span className="text-Green font-bold">div</span>
                  {">"} I am a{" "}
                  <span className="inline-block">
                    <TypewriterComponent
                      options={{
                        strings: ["MERN Stack Developer", "Next.js Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>{" "}
                  {"</"}<span className="text-Green font-bold">div</span>
                  {">"}
                </span>
              </div>
            </div>
            <div className="w-32 h-40 relative hidden md:block">
              <img className="absolute top-7 -left-8 w-full h-full object-cover" src={Emoji} alt="emoji" />
            </div>
          </div>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2  md:mx-10 my-6">
        <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-xl font-bold text-Snow mb-2">
    My Expertise
  </h1>
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="text-Snow h-full w-full bg-EveningBlack hover:bg-gradient-to-br from-green-950 hover:shadow-md hover:shadow-green-400 transition-all duration-300  p-6 rounded-xl flex flex-col"
            >
              <h2 className="text-md  font-cascadia font-bold mb-2">{section.title}</h2>
              <p className="text-sm font-circular text-LightGray">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
