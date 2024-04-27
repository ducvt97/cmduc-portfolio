import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
          <h4>Get in touch</h4>
          <div className="input-field">
            <input type="text" id="email" required className="input" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" id="subject" required className="input" />
            <label htmlFor="email">Subject</label>
          </div>
          <div className="input-field">
            <input type="text" id="message" required className="input" />
            <label htmlFor="email">Message</label>
          </div>
          <button className="btn btn-primary w-max self-end">Send</button>
        </div>
        <div className="flex flex-1 flex-col gap-3 sm:pl-16">
          <h3 className="mb-5">Contact Me</h3>
          <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-3" />
            ducvt97@gmail.com
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faPhone} className="text-xl mr-3" />
            (+84) 868 459 305
          </div>
          <Link
            href="https://www.linkedin.com/in/minhducchu97/"
            className="flex underline"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl mr-3" />
            linkedin.com/minhducchu97
          </Link>
          <Link
            href="https://www.facebook.com/minhduc.chu.97/"
            className="flex underline"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-xl mr-3" />
            facebook.com/minhduc.chu.97
          </Link>
          <Link
            href="https://github.com/ducvt97"
            className="flex underline"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl mr-3" />
            github.com/ducvt97
          </Link>
        </div>
      </section>
    </main>
  );
}
