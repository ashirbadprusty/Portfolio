import React from 'react';

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "NextJS",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "TailwindCSS",
  "Ant Design",
  "Material UI",
  "REST API",
  "JAVA",
  "MySQL",
  "Git",
  "GitHub"
];

const Tools = () => {
  return (
    <div className="w-full pt-6">
      <h3 className="text-sm font-semibold mb-4">Tools</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {tools.map(tool => (
          <span
            key={tool}
            className="bg-DarkGray text-gray-200 px-3 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tools;
