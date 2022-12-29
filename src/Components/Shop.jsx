import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../Products";

function Shop() {
  const [newGlasses, setNewGlasses] = useState(products);

  return (
    <div>
        <div style={{}}>
            <h1>Gender</h1>
            <div style={{textAlign: "center", display: "flex", justifyItems: "space-around"}}>
                <p>Male</p>
                <input type="checkbox" />
                <p>Female</p>
            </div>
        </div>
        <div className="products-container wrap">
            {newGlasses.map((item) => {
              return (
                <Link to={"/view-product?product=" + item.id}>
                  <div key={item.id} className="product-card">
                    <img src={require("../" + item.src)} alt={item.Name} />
                    <div className="product-desc">
                      <h2>{item.Name}</h2>
                      <p>Price ${item.price}</p>
                      <button className="product-btns">Add To Cart</button>
                      <button className="product-btns">Buy Now</button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
    </div>
  );
}

export default Shop;
