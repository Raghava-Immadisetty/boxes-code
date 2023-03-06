const Box = (props) => {
  const { msg, color } = props;
  return (
    <div className={color}>
      <h1 className="content">{msg}</h1>
    </div>
  );
};

const element = (
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box msg="small" color="smallCon" />
      <Box msg="Medium" color="mediumCon" />
      <Box msg="Large" color="largeCon" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
