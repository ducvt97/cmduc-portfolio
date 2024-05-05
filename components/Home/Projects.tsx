import React, { LegacyRef } from "react";

interface Props {
  ref?: LegacyRef<HTMLElement>;
}

const Projects: React.FC<Props> = () => {
  return (
    <section className="section flex-col bg-light"  id="projects">
      <h3 className="mb-6">My Projects</h3>
      <div className="card-list">
        <div className="card card-light">
          <h3>Updating...</h3>
          <div className="text-gray">
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house.
          </div>
        </div>
        <div className="card card-light">
          <h3>Updating...</h3>
          <div className="text-gray">
            Hire to outsource your digital marketing efforts, instead of
            handling in-house can provide your business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
