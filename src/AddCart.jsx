import { useSelector } from "react-redux";

const AddCart = () => {
  const cartselctor = useSelector((state) => state.cart.items);
  console.log(cartselctor.length);
  return (
    <div className="cart-container">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">
        {cartselctor.length ? cartselctor.length : 0}
      </span>
    </div>
  );
};
export default AddCart;
