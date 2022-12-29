import { Link } from "react-router-dom";
import Product from "./Product";

function ProductsSection(props) {
  return (
    <div className="Section">
      <h1>{props.header}</h1>
      <div className="products-container">
        {props.products.map((item, index) => {
          return (
            index < 4 && (
              <Link key={item.id} to={"/view-product?product=" + item.id}>
                <Product item={item}/>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ProductsSection;
