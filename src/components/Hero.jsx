import React from "react";

const Hero = () => {
  return (
    <section
      className="hero grid place-content-center"
      style={{ minHeight: "400px" }}
    >
      <div className="container text-center">
        <h1 className="text-7xl">SK8Hi</h1>
        <div className="details text-slate-200 sm:w-9/12 w-5/6 mx-auto">
          <p className="my-2">Get the best skating accesories from us.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            similique esse? Blanditiis eum non itaque enim dolores repellendus
            ab temporibus officia maiores tempora rem officiis laboriosam error
            ratione, nemo quaerat?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
