import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <nav className="header-wrapper bg-dark">
      <div className="header">
        <div className="logo">
          <Image src={logo} alt="logo" height={56} />
        </div>
        <div className="links">
          <Link href="#about" className="text-lg text-gray">
            About
          </Link>
          <Link href="#skills" className="text-lg text-gray">
            Skills
          </Link>
          <Link href="#services" className="text-lg text-gray">
            Services
          </Link>
          <Link href="#projects" className="text-lg text-gray">
            Projects
          </Link>
        </div>
        <div className="actions">
          <button className="btn btn-outline">
            <Link href="#contact">
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
