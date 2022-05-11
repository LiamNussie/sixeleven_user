import "./soon.scss";

const Soon = () => {
  return (
    <div className="soon">
      <div className="title">
        <h3 className="title-txt">Coming Soon!</h3>
      </div>
      <div className="flex">
        <div className="box">
          <div className="img"></div>
          <div className="txt">
            <p className="name">Back to School</p>
            <p className="info">Coming Soon</p>
          </div>
        </div>
        <div className="box">
          <div className="img"></div>
          <div className="txt">
            <p className="name">Widowers deserve to live</p>
            <p className="info">Coming Soon</p>
          </div>
        </div>
        <div className="box">
          <div className="img"></div>
          <div className="txt">
            <p className="name">Widow but Empowered (WBE)</p>
            <p className="info">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soon;
