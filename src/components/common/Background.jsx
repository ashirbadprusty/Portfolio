import React from "react";
import Footer from "./Footer";

const Card = ({ title, date, description }) => (
  <div className="bg-EveningBlack w-full h-auto sm:min-h-48 rounded-2xl hover:bg-gradient-to-br from-green-950 hover:shadow-md hover:shadow-green-400 transition-shadow duration-300 p-4 sm:p-6 space-y-3">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="text-Snow font-circular text-lg sm:text-2xl">{title}</div>
      <div className="text-SlateGray bg-DeepNightBlack p-2 sm:p-3 flex items-center justify-center rounded-full mt-2 sm:mt-0 text-sm sm:text-base">
        {date}
      </div>
    </div>
    <div className="text-LightGray text-sm sm:text-base mt-2">
      {description}
    </div>
  </div>
);

const Background = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_3px_1fr] min-h-screen">
          {/* Left Section */}
          <div className="p-2 xs:p-4 sm:p-8 space-y-3 xs:space-y-4 sm:space-y-6 flex flex-col">
            <h1 className="text-Snow font-cascadia text-base xs:text-lg sm:text-xl md:text-2xl">
              Education
            </h1>
            <Card
              title="Utkal University"
              date="2015-2018"
              description="Bachelor's Degree in Political Science from Utkal University."
            />
            <Card
              title="B.S College"
              date="2013-2015"
              description="Higher Secondary Education from Brundaban Subudhi College."
            />
            <Card
              title="R.M.J High School"
              date="2011-2013"
              description="Secondary Education from R.M.J High School."
            />
          </div>

          {/* Vertical Line Divider */}
          <div className="hidden md:block bg-Green min-h-screen mx-0.5 my-8 w-[4px]"></div>

          {/* Right Section */}
          <div className="p-4 sm:p-8 space-y-6 flex flex-col">
            <h1 className="text-Snow font-cascadia text-xl sm:text-2xl">
              Experience
            </h1>
            <div className="bg-EveningBlack w-full h-auto sm:min-h-56 rounded-2xl hover:bg-gradient-to-br from-green-950 hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300 p-4 sm:p-6 space-y-3">
              <div className="text-Snow font-circular text-xl sm:text-2xl">
                Hindustan Standards Bureau
              </div>
              <h2 className="text-LightGray font-circular text-lg sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="text-LightGray font-circular text-sm sm:text-base">
                As a Full Stack Developer, I use React, Node, Express & MongoDB
                to build complete and robust web applications.
              </p>
              <div className="bg-DeepNightBlack min-h-12 w-full rounded-2xl flex justify-between p-2 sm:p-3 items-center mt-4 shadow-inner">
                <div className="text-LightGray font-medium">
                  Feb 2024 - Aug 2024
                </div>
                <div className="text-LightGray font-medium">
                  Bangalore, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Background;
