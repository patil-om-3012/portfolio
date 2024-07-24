import React from 'react';

const Skills = () => {
  const skills = ['React', 'Redux', 'HTML', 'CSS','Express','NodeJS','Javascript','MongoDB','SQL','TensorFlow','Flask','Python','C++'];
  return (
    <section className="skills">
      <h3 className='skill-text'>Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={`${process.env.PUBLIC_URL}/assets/${skill.toLowerCase().replace(' ', '')}.png`} alt={skill} />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
