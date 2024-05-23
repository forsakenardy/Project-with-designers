import girl7 from "../assets/images/girl7.png";

import arrow from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import close from "../assets/images/close.svg";

function BagPageTest() {
  return (
    <div className="BagPageTest-container">
      <div className="arrow-and-title">
        <Link to="/dress1">
          <img className="bpt-arrow" src={arrow} alt="" />
        </Link>
        <h1 className="bpt-title">YOUR SHOPPING BAG</h1>
      </div>

      <div>
        <div className="bag-card">
          <div className="bpt-img">
            <img className="bpt-girl7" src={girl7} alt="" />
          </div>

          <div className="bpt-full-description">
            <h1>55€</h1>
            <h1 className="bpt-drs-name">SUMMERDRESS MANTRA</h1>
            <p className="bpt-paragraph">
              Experience effortless elegance with Luna Llena: The perfect
              addition to your wardrobe
            </p>

            <div className="centrar">
              <div className="bpt-drs-sizes">
                <div className="btp-size">S</div>
              </div>
              <div className="btp-color-sizes1"></div>
            </div>

            <div className="bpt-number-x">
              <h1 className="btp-sizeN">1</h1>
              <img src={close} alt="" />
            </div>
          </div>
        </div>
      </div>

      <button className="addbutton black">
        <h2>CHECKOUT • TOTAL: 55€</h2>
      </button>
    </div>
  );
}

export default BagPageTest;
