import AddCart from "./AddCart";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        src="https://m.media-amazon.com/images/I/91O+59RrgQL._AC_.jpg"
        alt="Product"
      />

      <div className="product-content">
        <h2>Wireless Headphones</h2>

        <p className="description">
          Premium sound quality with noise cancellation and long battery life.
        </p>

        <div className="price-section">
          <span className="price">₹1,999</span>
          <span className="old-price">₹2,999</span>
        </div>

        <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
        <button onClick={() => dispatch(removeItem(1))} className="r-btn">
          Remove to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
