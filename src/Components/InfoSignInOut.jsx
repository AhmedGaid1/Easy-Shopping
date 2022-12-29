import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function InfoSignInOut(props) {

    return (
        <div>
            {props.SignUp && (
                <Link to="/sign-in">
                    <button>Sign In</button>
                </Link>
            )}
            {props.SignIn && (
                <Link to="/sign-up">
                    <button>Sign Up</button>
                </Link>
            )}
        </div>
    );
}

export default InfoSignInOut;
