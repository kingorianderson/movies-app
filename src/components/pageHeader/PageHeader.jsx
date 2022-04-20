import "./pageHeader.scss";

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
