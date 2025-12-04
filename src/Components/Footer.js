import React from "react";
import { AppText } from "./AppText";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>{AppText.Footer.devCredit}</p>
      <p>Copyright © {currentYear} Rene Angelo</p>
    </footer>
  );
};

export default Footer;
