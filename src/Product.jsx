import AddCart from "./AddCart";
import "./App.css";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fecthProduct } from "./redux/productSlice";
import { createSelector } from "@reduxjs/toolkit";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthProduct());
  }, []);

  const Productselector = useSelector((state) => state.products.items);
  console.log(Productselector);
  const cartSelectore = useSelector((state) => state.cart.items);
  console.log(cartSelectore);
  return (
    <>
      <div className="grid">
        {Productselector.length &&
          Productselector.map((item) => (
            <div key={item.id} className="card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="content">
                <div className="title"> {item.title}</div>
                <div className="brand">{item.brand}</div>
                <div className="price">{item.price}</div>
                <div className="rating">{item.rating}</div>
                {/* {cartSelectore.find(
                  ((cartItem) => cartItem.id === cartItem.id) ? (
                    <button className="btn-clear btn-disable">
                      Add Too Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="btn-clear"
                    >
                      Add Cart
                    </button>
                  ),
                )} */}

                {cartSelectore.find((cartItem) => cartItem.id === item.id) ? (
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="remove-button"
                  >
                    Remove to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="btn-clear"
                  >
                    Add Cart
                  </button>
                )}
              </div>

              {/* <button
                onClick={() => dispatch(addItem(item))}
                className="btn-clear"
              >
                Add Cart
              </button> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
