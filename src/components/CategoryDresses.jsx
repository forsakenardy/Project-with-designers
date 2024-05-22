import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1/1.svg"
import image2 from "../assets/image1/2.svg"
import image3 from "../assets/image1/3.svg"
import image4 from "../assets/image1/4.svg"
import image5 from "../assets/image1/5.svg"
import image6 from "../assets/image1/6.svg"


function CategoryDresses() {
  return (
    <>
      <div className="">
        <h1 className="menu1">SALE-60%</h1>

        <h1 className="menu1">BLOUSES</h1>

        <h1 className="menu1">DRESSES</h1>

        <h1 className="menu1">JACKETS</h1>

        <h1 className="menu1">KNITWEAR</h1>

        <h1 className="menu1">SHIRTS</h1>

        <h1 className="menu1"></h1>

        <h1 className="menu1">SKIRTS</h1>

        <h1 className="menu1">TOPS</h1>

        <h1 className="menu1">TROUSERS</h1>

        <h1 className="menu1">ACCESSORIES</h1>
      </div>
      <div className="cardDre">
        <section className="dress-card-1">
          <img className="" src={image1} alt=" Boho" />
          <h1 className="descrption">DREES BOHO SOUL </h1>
          <p>45 €</p>
        </section>
        <section className="dress-card-2">
          <img className="" src={image2} alt=" Mantra" />
          <h1 className="description">SUMMER MANTRA </h1>
          <p>55 €</p>
        </section>
        <section className="dress-card-3">
          <img className="" src={image3} alt="Minimal " />
          <h1 className="descrption">DRESS MINIMAL</h1>
          <p>45 €</p>
        </section>
        <section className="dress-card-4">
          <img className="" src={image4} alt=" Boho" />
          <h1 className="descrption">DRESS OCEAN </h1>
          <p>45 €</p>
        </section>
        <section className="dress-card-5">
          <img className="" src={image5} alt=" Boho" />
          <h1 className="descrption">DREES FREE SPIRIT </h1>
          <p>50 €</p>
        </section>
        <section className="dress-card-1">
          <img className="" src={image6} alt=" Boho" />
          <h1 className="descrption">DREES GYPSY </h1>
          <p>50 €</p>
        </section>
      </div>
    </>
  );
}
export default CategoryDresses;
