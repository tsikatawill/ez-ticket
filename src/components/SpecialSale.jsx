import React from "react";
import { FaBicycle, FaCog, FaWeight } from "react-icons/fa";
import Skateboard from "../imgs/skateboard";
import Skateboard2 from "../imgs/skateboard2.png";
import userDP from "../imgs/userDP.png";

const SpecialSale = () => {
  return (
    <section className="special-sale dark:bg-gray-800  dark:text-white">
      <div className="container">
        <div className="section-head grid place-content-center mb-5">
          <div className="title text-left">
            <h2 style={{ lineHeight: "15px" }}>
              Speed <span>Bat</span>
            </h2>
            <small className="text-xs font-bold text-red-800">
              SPECIAL SALE
            </small>
          </div>
        </div>
        <div className="sm:flex gap-4">
          <div className="w-3/6">
            <div className="img-wrapper">
              <img
                className="sm:mr-20 h-80 ml-auto"
                src={Skateboard2}
                alt="skateboard"
              />
            </div>
          </div>
          <div className="w-3/6  flex-1">
            <p className="font-bold text-red-800 text-right mr-5">
              famous owners
            </p>
            <div className="divider bg-red-700 h-1 mb-5"></div>
            <div className="flex">
              <ul className="board-details w-4/6">
                <li className="mb-5">
                  <div className="flex items-center">
                    <div className="icon mr-10">
                      <FaBicycle size="50" />
                    </div>
                    <div className="text">
                      <p>
                        Wheel Size <span className="font-bold">5inches</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-5">
                  <div className="flex items-center">
                    <div className="icon mr-10">
                      <FaCog size="50" />
                    </div>
                    <div className="text">
                      <p>
                        Material <span className="font-bold">Steel + Cork</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="icon mr-10">
                      <FaWeight size="50" />
                    </div>
                    <div className="text">
                      <p>
                        Weight <span className="font-bold">10kg</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="famous-people text-center h-48 w-2/6 overflow-y-scroll">
                <div className="famous-person w-10 mx-auto">
                  <div className="image">
                    <img src={userDP} alt="userDP" />
                  </div>
                  <div className="name">
                    <p>Prince</p>
                  </div>
                </div>
                <div className="famous-person w-10 mx-auto">
                  <div className="image">
                    <img src={userDP} alt="userDP" />
                  </div>
                  <div className="name">
                    <p>Prince</p>
                  </div>
                </div>
                <div className="famous-person w-10 mx-auto">
                  <div className="image">
                    <img src={userDP} alt="userDP" />
                  </div>
                  <div className="name">
                    <p>Prince</p>
                  </div>
                </div>
                <div className="famous-person w-10 mx-auto">
                  <div className="image">
                    <img src={userDP} alt="userDP" />
                  </div>
                  <div className="name">
                    <p>Prince</p>
                  </div>
                </div>
                <div className="famous-person w-10 mx-auto">
                  <div className="image">
                    <img src={userDP} alt="userDP" />
                  </div>
                  <div className="name">
                    <p>Prince</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSale;
