import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer dark">
      <div className="text-gray">
        Copyright © {currentYear} ducvt97. All Rights Reserved.
      </div>
      <div className="flex">
        <div className="text-light mr-10">Terms of Use</div>
        <div className="text-light">Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
