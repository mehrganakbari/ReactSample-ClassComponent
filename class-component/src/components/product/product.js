import "../../App.css"

const Product = (props) => {
  return (
    <div className="product-contain">
      <p>product name : {props.name} course</p>
      <p>product price : {props.price}</p>
    </div>
  );
};

export default Product;
