import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Skate from "../imgs/skateboard7.png";

const CEO = () => {
  return (
    <section className="ceo">
      <div className="container text-white ">
        <div className="section-head mb-5">
          <h2 className="text-3xl">John Doe</h2>
          <p className="text-sm italic">CEO, S8Hi</p>
        </div>
        <div className="section-body">
          <div className="sm:flex">
            <div className="flex-1">
              <div className="img-wrapper sm:mr-10">
                <img src={Skate} alt="" className="ml-auto h-96 opacity-90" />
              </div>
            </div>
            <div className="flex-1 text-right">
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                iusto fugiat iste error officia nulla accusamus! Perspiciatis
                rem explicabo adipisci similique debitis quae dolorum dolore
                excepturi sequi dignissimos! Debitis possimus beatae iusto
                fugiat iste error officia nulla accusamus!
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rem explicabo adipisci similique debitis quae
                dolorum dolore excepturi sequi dignissimos! Debitis possimus
                beatae iusto fugiat iste error officia nulla accusamus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea,
                recusandae quo debitis nihil adipisci, accusamus temporibus sunt
                quae officia lectus, blanditiis ullam.
              </p>
              <hr className="my-5" />
              <div className="flex gap-3 justify-end items-center">
                <p>John Doe</p>
                <div className="socials flex gap-1">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
