import { useSelector } from "react-redux";

const AddCart = () => {
  const selctor = useSelector((state) => state.cart.value);
  // console.log(selctor);
  return (
    <div class="cart-container">
      <span class="cart-icon">🛒</span>
      <span class="cart-count">{selctor}</span>
    </div>
  );
};
export default AddCart;
