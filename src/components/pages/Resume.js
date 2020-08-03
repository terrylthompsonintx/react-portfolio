import React from "react";

const Resume = () => (
  <div>
    <h3>Resume' </h3>
    <h5>Rseume Download <a href="TerryThompsonWebDeveloperResume.pdf" download="TerryThompsonWebDeveloperResume.pdf"><img src="./assets/img/resume.png" width='42px' alt = "Resume" /></a>
    
    </h5>
    
    <h4><img src= "./assets/img/tech.gif" alt="Proficiencies" />Proficiencies</h4>
    <ul class='proList'>
      <li>React</li>
      <li>Mongo/Mongoose</li>
      <li>MySQL/Sequelize</li>
      <li>Node/Express</li>
      <li>REST APIs</li>
      <li>Javascript</li>
      <li>Bootstrap/Jquery</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>
);

export default Resume;
