function Intro(props) {
  return (
    <div
      className="intro-div"
      style={{
        backgroundImage:
          "url(" +
          props.Image +
          "), linear-gradient(rgba(24, 24, 24, 0), rgba(24, 24, 24, 0.3))",
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h1>{props.header}</h1>
        <p>{props.text}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default Intro;
