import React, { useState } from "react";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/java-script.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reduxsagaLogo from "../assets/reduxsaga.png";
import cssLogo from "../assets/css.png";
import reactjsLogo from "../assets/react.png";
import wixstudioLogo from "../assets/wix.png";
import englishLogo from "../assets/english.png";

const Skills = () => {
  const skillsData = [
    { id: 1, name: "HTML", logo: htmlLogo, experience: "1 Year!" },
    { id: 2, name: "CSS", logo: cssLogo, experience: "1 Year!" },
    { id: 3, name: "Javascript", logo: jsLogo, experience: "1 Year!" },
    { id: 4, name: "ReactJS", logo: reactjsLogo, experience: "6 Months!" },
    { id: 5, name: "Redux-Saga", logo: reduxsagaLogo, experience: "3 Months!" },
    { id: 6, name: "WixStudio", logo: wixstudioLogo, experience: "5 Months!" },
    { id: 7, name: "Bootstrap", logo: bootstrapLogo, experience: "1 Year!" },
    { id: 8, name: "English", logo: englishLogo, experience: "Ielts 6.5!" },
  ];

  // Initialize state for showing years of experience for each skill
  const [showYears, setShowYears] = useState(() => {
    const initialShowYears = {};
    skillsData.forEach(skill => {
      initialShowYears[skill.id] = false;
    });
    return initialShowYears;
  });

  // Function to toggle showYears for a skill
  const handleShowYears = (id) => {
    setShowYears(prevShowYears => ({
      ...prevShowYears,
      [id]: !prevShowYears[id]
    }));
  };

  return (
    <>
      <h1 className="mainskills-text">
        <span>Main Skills</span>
      </h1>

      <div className="skills-block container overflow-hidden">
        <div className="row gy-5">
          {skillsData.map(skill => (
            <div
              key={skill.id}
              className={`col-md-4 offset-md-${skill.id % 2 === 0 ? '2' : '1'} ${skill.name.toLowerCase()}-skill`}
              onClick={() => handleShowYears(skill.id)}
            >
              {!showYears[skill.id] ? (
                <>
                  {skill.id % 2 === 0 ? (
                    <>
                      <div className={`${skill.name.toLowerCase()}-title p-4 text-start`}>
                        {skill.name}
                      </div>
                      <img
                        className={`${skill.name.toLowerCase()}-logo text-end`}
                        src={skill.logo}
                        alt={`${skill.name.toLowerCase()}-logo`}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className={`${skill.name.toLowerCase()}-logo text-start`}
                        src={skill.logo}
                        alt={`${skill.name.toLowerCase()}-logo`}
                      />
                      <div className={`${skill.name.toLowerCase()}-title p-4 text-end`}>
                        {skill.name}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="years-worked p-4">
                  {skill.experience}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
