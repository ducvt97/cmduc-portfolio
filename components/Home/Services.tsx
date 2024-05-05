import React, { LegacyRef } from "react";

interface Props {
  ref?: LegacyRef<HTMLElement>;
}

const Services: React.FC<Props> = ({ ref }) => {
  return (
    <section className="section flex-col bg-dark" ref={ref} id="services">
      <h3 className="mb-6 text-accent">SERVICES</h3>
      <h1 className="mb-16">I can help you with</h1>
      <div className="card-list">
        <div className="card card-dark">
          <h3>Design</h3>
          <div className="text-gray">
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house.
          </div>
        </div>
        <div className="card card-dark">
          <h3>Development</h3>
          <div className="text-gray">
            Hire to outsource your digital marketing efforts, instead of
            handling in-house can provide your business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
