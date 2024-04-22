import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="header dark">
      <div className="logo">LOGO</div>
      <div className="links">
        <Link href="" className="text-lg text-gray">
          About
        </Link>
        <Link href="" className="text-lg text-gray">
          Services
        </Link>
        <Link href="" className="text-lg text-gray">
          Projects
        </Link>
      </div>
      <div className="actions">
        <button className="btn btn-outline">Contact</button>
      </div>
    </nav>
  );
};

export default Header;
