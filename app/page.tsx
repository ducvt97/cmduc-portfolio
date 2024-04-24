export default function Home() {
  return (
    <main className="">
      <section className="section bg-dark">
        <div className="flex flex-col flex-1 gap-7">
          <h5>Chu Minh Duc</h5>
          <h1>Help To Build Your Dream Project</h1>
          <div className="text-small text-gray">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </div>
          <button className="btn btn-primary w-max">SEE MY WORK</button>
        </div>
        <div className="h-96 flex-1 bg-slate-900"></div>
      </section>
      <section className="section flex-col bg-light">
        <h5 className="mb-6">SERVICE</h5>
        <h1 className="mb-16">I can help you with</h1>
        <div className="card-list">
          <div className="card card-light">
            <h3>Design</h3>
            <div className="text-gray">
              Agency is a business you hire to outsource your digital marketing
              efforts, instead of handling in-house.
            </div>
          </div>
          <div className="card card-light">
            <h3>Development</h3>
            <div className="text-gray">
              Hire to outsource your digital marketing efforts, instead of
              handling in-house can provide your business.
            </div>
          </div>
        </div>
      </section>
      <section className="section flex-col bg-dark">
        <h3 className="mb-6">Latest Work</h3>
        <div className="card-list">
          <div className="card card-dark">
            <h4>Design</h4>
            <div className="text-gray">
              Agency is a business you hire to outsource your digital marketing
              efforts, instead of handling in-house.
            </div>
          </div>
          <div className="card card-dark">
            <h4>Development</h4>
            <div className="text-gray">
              Hire to outsource your digital marketing efforts, instead of
              handling in-house can provide your business.
            </div>
          </div>
        </div>
      </section>
      <section className="section flex-col bg-light">
        <h3 className="mb-6">My Projects</h3>
        <div className="card-list">
          <div className="card card-light">
            <h3>Design</h3>
            <div className="text-gray">
              Agency is a business you hire to outsource your digital marketing
              efforts, instead of handling in-house.
            </div>
          </div>
          <div className="card card-light">
            <h3>Development</h3>
            <div className="text-gray">
              Hire to outsource your digital marketing efforts, instead of
              handling in-house can provide your business.
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-dark gap-10">
        <div className="card card-white flex-1">
          <h3>Development</h3>
          <div className="">
            Hire to outsource your digital marketing efforts, instead of
            handling in-house can provide your business.
          </div>
        </div>
        <div className="h-96 flex-1 bg-slate-900"></div>
      </section>
    </main>
  );
}
