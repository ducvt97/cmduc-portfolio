import React, { LegacyRef } from "react";

interface Props {
  ref?: LegacyRef<HTMLElement>;
}

const Skills: React.FC<Props> = () => {
  return (
    <section className="section flex-col bg-light" id="skills">
      <h3 className="mb-6">My Skills</h3>
      <div className="flex gap-4">
        <div className="card card-light flex-1">
          <h4>Technical Skills</h4>
          <div>
            <div>
              Strong foundation in web development: HTML5, CSS3, SASS (including
              UI libraries like Bootstrap, Tailwind, MUI, Vuetify,...),
              JavaScript and TypeScript (ES6+).
            </div>
            <div>
              Expertise in popular JavaScript frameworks like React, NextJS,
              Vue, NuxtJS and Angular.
            </div>
            <div>
              Ability to build responsive websites in mobile-first approach.
            </div>
            <div>
              UI/UX design: Understanding of design principles to create
              user-friendly and visually appealing interfaces.
            </div>
            <div>
              CI/CD: Git, Jenkins, JIRA, familiar with Scum, Agile processes
            </div>
            <div>
              Performance optimization, familiarity with building tools and
              packages management like Webpack, NPM, Yarn,...
            </div>
            <div>
              Ability to integrate with back-end APIs and fetch data
              efficiently.
            </div>
          </div>
        </div>
        <div className="card card-light flex-1">
          <h4>Others</h4>
          <div>
            <div>Problem-solving and critical thinking.</div>
            <div>
              Excellent written and verbal communication skills to collaborate
              effectively with designers, back-end developers, and other
              stakeholders.
            </div>
            <div>
              Ability to work effectively in a team environment, while also good
              at working independently; self management.
            </div>
            <div>
              A keen eye for detail to ensure pixel-perfect implementation and a
              high-quality user experience.
            </div>
            <div>
              Willingness to stay up-to-date with the latest frontend
              technologies and trends.
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-10 mb-3">Certificates</h3>
      <div className="text-large">IELTS 6.5</div>
      <div className="text-large">Toeic 845</div>
    </section>
  );
};

export default Skills;
