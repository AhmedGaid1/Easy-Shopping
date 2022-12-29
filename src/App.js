import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/Basic/ScrollTopTop";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ViewProductsBody from "./Components/ViewProducts";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <div>
              <Navbar status="SignIn" />
              <SignIn />
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div>
              <Navbar status="SignUp" />
              <SignUp />
            </div>
          }
        />
        <Route
          name="/view-product"
          path="/:Product"
          element={
            <div>
              <Navbar />
              <ViewProductsBody />
            </div>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop smooth />
    </Router>
  );
}

export default App;
