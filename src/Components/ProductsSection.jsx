import { Link } from "react-router-dom";

function ProductsSection(props) {
  console.log(props.products);

  return (
    <div className="Section">
      <h1>{props.header}</h1>
      <div className="products-container">
        {props.products.map((item) => {
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

export default ProductsSection;
