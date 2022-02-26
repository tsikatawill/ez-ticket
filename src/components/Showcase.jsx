import React from "react";
import Skateboard from "../imgs/skateboard";

const Showcase = () => {
  return (
    <section className="showcase h-96">
      <div className="container py-5">
        <div className="section-head">
          <h2>
            Show up in <span>Style</span>
          </h2>
        </div>
        <div className="section-body py-5">
          <div className="cards flex flex-wrap justify-center gap-4">
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="product-card rounded-lg w-80 shadow-sm hover:shadow-lg">
              <div className="image-wrapper">
                <img src={Skateboard} alt="" width="100%" />
              </div>
              <div className="detail flex flex-col items-center p-2 h-fit">
                <div className="title flex justify-center">
                  <p className="text-red-700 font-bold">
                    Awesome Caddy
                    <span className="year ml-1 font-thin text-black">2019</span>
                  </p>
                </div>
                <div className="cta my-2">
                  <button className="outline-1 bg-slate-700 text-white px-3 py-1 rounded">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
