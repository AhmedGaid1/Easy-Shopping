/* eslint-disable */
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect } from "react";
import InfoSignInOut from "./InfoSignInOut";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  var stat = props.status === undefined ? "all" : props.status;

  var Search;
  var SignIn;
  var SignUp;

  switch (stat) {
    case "Search":
      Search = true;
      SignIn = false;
      SignUp = false;
      break;
    case "SignIn":
      Search = false;
      SignIn = true;
      SignUp = false;
      break;
    case "SignUp":
      Search = false;
      SignIn = false;
      SignUp = true;
      break;
    default:
      Search = true;
      SignIn = true;
      SignUp = true;
      break;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = stat === "all" ? ["top-main-navbar"] : ["top-main-navbar fixed_navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav>
      <div className={navbarClasses.toString().slice(0, navbarClasses.toString().length).replace(",", " ")}>
        <Link to="/">
          <img src={require("../Images/logo.png")} alt="logo-img" />
        </Link>
        <div className="navbar-btns">
          <input className="Search" type="text" placeholder="What are you looking for" />
          {SignUp && (
            <Link to="/sign-in">
              <button>Sign In</button>
            </Link>
          )}
          {SignIn && (
            <Link to="/sign-up">
              <button>Sign Up</button>
            </Link>
          )}
          <FavoriteBorderIcon className="navbar-icons" />
          <ShoppingCartIcon className="navbar-icons" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
