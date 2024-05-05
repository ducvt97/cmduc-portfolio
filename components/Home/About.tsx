import React, { LegacyRef } from "react";

interface Props {
  refs?: LegacyRef<HTMLElement>;
}

const About: React.FC<Props> = ({ refs }) => {
  return (
    <section className="section bg-dark pt-24" ref={refs} id="about">
      <div className="flex flex-col flex-1 gap-7">
        <h3 className="text-accent">ANDY CHU</h3>
        <h1>Help To Build Your Dream Project</h1>
        <div className="text-small text-gray">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </div>
        <button className="btn btn-primary w-max">SEE MY WORK</button>
      </div>
      <div className="h-96 flex-1 bg-slate-900"></div>
    </section>
  );
};

export default About;
