import React from "react";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItem } from "./redux/slice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header />

      <h1>This is the ReduxToolkit</h1>
      {/* This is button for the clear all cart */}
      <button onClick={() => dispatch(clearAllItem())} className="btn-clear">
        clearAll Cart
      </button>
      <Product />
    </div>
  );
};

export default App;
