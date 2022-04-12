import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <FaTwitterSquare className="footer-icons" />
      <FaFacebookSquare className="footer-icons" />
      <FaInstagramSquare className="footer-icons" />
      <FaGithubSquare className="footer-icons" />
    </div>
  );
}

export default Footer;
