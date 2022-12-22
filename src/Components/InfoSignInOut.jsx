import Box from "@mui/material/Box";
import Button from "./Basic/button";
import { Link } from "react-router-dom";

function InfoSignInOut(props) {

    return (
        <div>
            {props.SignUp && (
                <Link to="/sign-in">
                    <Button>Sign In</Button>
                </Link>
            )}
            {props.SignIn && (
                <Link to="/sign-up">
                    <Button>Sign Up</Button>
                </Link>
            )}
        </div>
    );
}

export default InfoSignInOut;
