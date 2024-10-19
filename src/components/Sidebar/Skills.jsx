import React from 'react'

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <span className="text-sm">{skill}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-Snow rounded-full h-2.5 mt-1">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillsData = [
    { skill: 'MERN Stack Developer', percentage: 75 },
    { skill: 'React Developer', percentage: 91 },
    { skill: 'Backend Developer', percentage: 88 },
  ];

  return (
    <div className="w-full pt-6">
      <h3 className="text-sm font-semibold mb-2">Expertise and Competencies</h3>
      {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
      ))}
    </div>
  );
}

export default Skills;
