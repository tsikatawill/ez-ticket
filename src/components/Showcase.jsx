import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Skateboard from "../imgs/skateboard";
import Skateboard2 from "../imgs/skateboard2.png";
import Skateboard3 from "../imgs/skateboard3.png";
import Skateboard4 from "../imgs/skateboard4.png";
// import Skateboard5 from "../imgs/skateboard5.png";
import Skateboard6 from "../imgs/skateboard6.png";

const Showcase = () => {
  return (
    <section className="showcase dark:bg-slate-800">
      <div className="container">
        <div className="section-head dark:text-white mb-5">
          <h2 className="mb-2">
            Show up in <span>Style</span>
          </h2>
          <p className="text-sm">
            Get these stylish skateboards at amazing prices only from us
          </p>
        </div>
        <div className="section-body py-5">
          <div className="cards flex flex-wrap justify-center gap-4">
            <ProductCard
              img={Skateboard2}
              title="Yellow Doom"
              year="2022"
              price="15.99"
            />
            <ProductCard
              img={Skateboard4}
              title="Streak"
              year="2019"
              price="17.99"
            />
            <ProductCard
              img={Skateboard6}
              title="2pac"
              year="2021"
              price="30.99"
            />
            <ProductCard
              img={Skateboard3}
              title="Surfz"
              year="2022"
              price="24.99"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ img, title, year, price }) => {
  return (
    <div className="product-card bg-slate-100 rounded-lg overflow-hidden dark:bg-slate-400 flex flex-col items-center w-72  shadow-sm hover:shadow-lg">
      <div className="image-wrapper h-48 my-2">
        <img src={img} alt="k" style={{ height: "100%" }} />
      </div>
      <div className="detail bg-slate-300 text-black dark:bg-white w-full flex flex-col items-center p-2 h-fit">
        <div className="title flex justify-center">
          <p className="text-red-700 font-bold">
            {title}
            <span className="year ml-1 font-thin text-black">{year}</span>
          </p>
        </div>
        <p className="text-xl">{price ? `$${price}` : "free"}</p>
        <div className="cta my-2">
          <button className="outline-1 flex bg-slate-500 text-white px-3 py-1 rounded">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
