
function VProduct(props) {
  const classes = props.index > 4 ? "product-img backgound-100" : "product-img";

  return (
    <div
      className={classes}
      style={{ backgroundImage: `url(${props.src})` }}
    />
  );
}

export default VProduct;
