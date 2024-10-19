import React, { useState, useEffect } from "react";

const CircularProgress = ({ percentage }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-16 h-16">
      <circle
        className="text-gray-900"
        strokeWidth="4"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
      />
      <circle
        className="text-green-500"
        strokeWidth="4"
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-lg font-bold "
        fill="white"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const Language = () => {
  // Initial percentages for each language
  const [percentages, setPercentages] = useState({
    Hindi: 0,
    English: 0,
    Odia: 0,
  });

  // Target percentages for each language
  const targetPercentages = {
    Hindi: 98,
    English: 94,
    Odia: 100,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages((prev) => {
        const updated = { ...prev };
        Object.keys(targetPercentages).forEach((lang) => {
          if (updated[lang] < targetPercentages[lang]) {
            updated[lang] += 1;
          }
        });
        return updated;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="w-full">
      <h3 className="text-sm font-semibold mb-4 text-gray-200">Languages</h3>
      <div className="flex justify-evenly">
        {Object.keys(percentages).map((language) => (
          <div key={language} className="flex flex-col items-center">
            <CircularProgress percentage={percentages[language]} />
            <p className="mt-2 text-gray-200 text-sm">{language}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Language;
