import { Link } from "react-router-dom";

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
        <Link to={"/shop?color=" + props.color}>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
