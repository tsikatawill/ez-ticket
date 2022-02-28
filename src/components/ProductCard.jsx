import React, { useContext, useEffect, useState } from "react";
import {
  FaBars,
  FaCartPlus,
  FaCommentAlt,
  FaHeart,
  FaLocationArrow,
  FaShareAlt,
} from "react-icons/fa";
import userDP from "../imgs/userDP.png";
import Skateboard from "../imgs/skateboard5.png";
import ProductModal from "./ProductModal";
import { ProductModalContext } from "../context/ProductModalContext";

const ProductCard = ({
  shopIcon,
  shopName,
  shopLocation,
  prodName,
  prodImage,
  prodDesc,
  prodPrice,
}) => {
  const [formattedPrice, setFormattedPrice] = useState(0);
  const product = { prodName, prodDesc, prodPrice, prodImage };
  useEffect(() => {
    const formatProdPrice = () => {
      if (prodPrice) {
        if (prodPrice.split(".")[1] > 0) {
          setFormattedPrice(prodPrice);
          console.log(prodPrice.split(".")[1]);
        } else {
          setFormattedPrice(prodPrice.split(".")[0]);
        }
      }
    };
    formatProdPrice();
  }, [prodPrice]);

  const { setProdModActive } = useContext(ProductModalContext);

  return (
    <>
      <div className="product-card bg-slate-100 w-80 p-4 rounded-md">
        <div className="card-header mb-4 flex justify-between items-center">
          <div className="shop-details flex gap-3">
            <div className="shop-icon">
              <img src={shopIcon} alt="shop" width="50px" />
            </div>
            <div>
              <p className="shop-name font-semibold capitalize">{shopName}</p>
              <small className="shop-location flex items-center gap-2 capitalize">
                {shopLocation}
                <FaLocationArrow />
              </small>
            </div>
          </div>
          <button className="options-btn">
            <FaBars size="20" />
          </button>
        </div>
        <div className="card-body">
          <div className="product-image-wrapper h-52 bg-white rounded-md overflow-hidden relative">
            <img
              src={prodImage}
              alt="product"
              className=" h-full mx-auto py-3"
            />
            <span className="condition absolute top-0 right-0 bg-green-600 text-white px-2 mb-1">
              new
            </span>
          </div>
          <div className="product-details my-4 flex items-center">
            <div className=" pr-2 w-5/6">
              <p className="product-name font-semibold capitalize">
                {prodName}
              </p>
              <p className="product-description">{prodDesc}</p>
            </div>
            <span className="price text-2xl font-semibold">{`$${formattedPrice}`}</span>
          </div>
          <div className="cta text-3xl flex gap-4">
            <button className="like">
              <FaHeart />
            </button>
            <button className="review">
              <FaCommentAlt />
            </button>
            <button className="share">
              <FaShareAlt />
            </button>
            <button className="buy" onClick={() => setProdModActive(true)}>
              <FaCartPlus />
            </button>
          </div>
        </div>
        <ProductModal product={product} />
      </div>
    </>
  );
};

ProductCard.defaultProps = {
  shopIcon: userDP,
  shopName: "Shop Name",
  shopLocation: "Shop, location",
  prodName: "Product name",
  prodImage: Skateboard,
  prodDesc: "Product is in a very good working condition and is brand new",
  prodPrice: "10000",
};

export default ProductCard;
