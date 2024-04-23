import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer dark">
      <div className="text-gray">
        Copyright © {currentYear} ducvt97. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
