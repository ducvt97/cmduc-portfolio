import React, { LegacyRef } from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  ref?: LegacyRef<HTMLElement>;
}

const Contact: React.FC<Props> = () => {
  return (
    <section className="section bg-dark gap-10" id="contact">
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
        <Link href="https://github.com/ducvt97" className="flex underline">
          <FontAwesomeIcon icon={faGithub} className="text-xl mr-3" />
          github.com/ducvt97
        </Link>
      </div>
    </section>
  );
};

export default Contact;
