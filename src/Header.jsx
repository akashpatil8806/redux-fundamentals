import AddCart from "./AddCart";
import "./App.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopKart</div>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">3</span>
      </div> */}
      <AddCart />
    </header>
  );
};
export default Header;
