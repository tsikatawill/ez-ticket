import React, { useContext } from "react";
import { FaCartPlus, FaStar, FaStarHalf, FaTimes } from "react-icons/fa";
import { ProductModalContext } from "../context/ProductModalContext";
import Skateboard from "../imgs/skateboard5.png";

const ProductModal = ({ product }) => {
  const { prodModAtive, setProdModActive } = useContext(ProductModalContext);

  return (
    <div
      className={`${
        prodModAtive ? "open" : "closed"
      } product-modal grid place-content-center fixed top-0 bottom-0 left-0 min-h-screen w-screen z-50`}
      style={{ background: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="modal-inner bg-white rounded-lg overflow-hidden sm:flex mx-5 max-w-7xl p-5 relative">
        <button
          className="close-modal p-3 bg-red-500 text-white absolute top-2 right-2 rounded-md"
          onClick={() => setProdModActive(false)}
        >
          <FaTimes />
        </button>
        <div className="prod-image-wrapper flex-1 h-52">
          <img src={Skateboard} alt="product" className="mx-auto h-full" />
        </div>
        <div className="prod-details flex-1 text-center sm:text-left">
          <div>
            <h2 className="product-name font-bold text-xl sm:text-3xl">
              Fiifi Cors
            </h2>
            <div className="stars flex gap-1 mb-2 sm:w-full w-fit mx-auto">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStarHalf color="orange" />
            </div>
            <p className="product-desc mb-2 sm:max-w-full max-w-xs">
              Product is in a very good working condition and is brand new
            </p>
            <div className="price-x-quantity sm:flex gap-5 items-center">
              <p className="price text-3xl">$60</p>
              <div
                className="quantity-wrapper flex items-center justify-center
                 gap-2"
              >
                <button className="h-8 w-8 bg-slate-100 rounded-md decrement">
                  -
                </button>
                <span className="quantity">2</span>
                <button className="h-8 w-8 bg-slate-100 rounded-md increment">
                  +
                </button>
              </div>
            </div>
            <button className="add-to-cart flex mt-2 items-center justify-center gap-2 bg-green-700 sm:w-fit w-full text-white px-4 py-2 rounded-md">
              Add to cart <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
