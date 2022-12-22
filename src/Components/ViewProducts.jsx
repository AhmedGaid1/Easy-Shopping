/* eslint-disable */
import "./Styles/ViewProductBody.css";
import VProduct from "./VProduct";
import { useLayoutEffect, useState } from "react";
import products from "../Products";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ViewProductsBody(props) {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("product");

  var oneProduct = [];

  const [ProductsDet, setProductsDet] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [index, setIndex] = useState(0);

  // useLayoutEffect(() => {
  //     axios
  //         .post("getProducts", { status: props.id })
  //         .then(async function (response) {
  //             oneProduct = response.data;
  //             setProductsDet(response.data);

  //             setImagePath(oneProduct[0].colors[0].src.map((item) => require("../../../Images/products/" + item)));
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // }, []);

  return (
    <div className="productBody">
      <div classes="float-l all-flex space-between container-div products-body-div">
        {products[id].src.map((item) => (
          <VProduct key={id} index={id} src={require("../" + item)} />
        ))}
        {/* <VProduct key={id} index={id} src={require("../" + products[id].src)} /> */}
      </div>
    </div>
  );
}

export default ViewProductsBody;
