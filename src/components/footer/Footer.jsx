import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={Logo} alt="" />
            <Link to="/">netMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Must watch</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Recent release</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
