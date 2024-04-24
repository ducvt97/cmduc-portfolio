import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="bg-dark px-8">
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="links">
          <Link href="/" className="text-lg text-gray">
            Home
          </Link>
          <Link href="/projects" className="text-lg text-gray">
            Projects
          </Link>
        </div>
        <div className="actions">
          <button className="btn btn-outline">Browse my playlist</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
