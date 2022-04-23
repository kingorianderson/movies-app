import "./pageHeader.scss";
import Bg from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${Bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
