import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Bg from "../../assets/footer-bg.jpg";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={Logo} alt="" />
            <Link to="/">netMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <a href="https://kingori.co.ke" target="_blank">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
