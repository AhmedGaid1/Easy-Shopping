function Products(props) {
  return (
    <div key={props.item.id} className="product-card">
      <img src={require("../" + props.item.src)} alt={props.item.Name} />
      <div className="product-desc">
        <h2>{props.item.Name}</h2>
        <p>Price ${props.item.price}</p>
        <button className="product-btns">Add To Cart</button>
        <button className="product-btns">Buy Now</button>
      </div>
    </div>
  );
}

export default Products;
