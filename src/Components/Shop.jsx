import { Link, useLocation } from "react-router-dom";
import products from "../Products";
import Products from "./Product";

function Shop() {
  const search = useLocation().search;
  const gender = new URLSearchParams(search).get("gender");
  const color = new URLSearchParams(search).get("color");
  var Arr;

  if (gender === null && color === null) {
    Arr = products;
  } else if (gender === null && color !== null) {
    Arr = products.filter((item) => item.color === color);
  } else if (gender !== null && color === null) {
    Arr = products.filter((item) => item.gender === gender);
  } else if (gender !== null && color !== null) {
    const genderArr = products.filter((item) => item.gender === gender);
    Arr = genderArr.filter((item) => item.color === color);
  }

  return (
    <div>
      <div className="products-container wrap">
        {Arr.map((item) => {
          return (
            <Link key={item.id} to={"/view-product?product=" + item.id}>
                <Products item={item}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
