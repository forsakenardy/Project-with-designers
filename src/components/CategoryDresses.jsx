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
    <div className="category-page-container">
      <div className="menuSelec">
        <h1 className="menu1">SALE-60%</h1>

        <h1 className="menu1">BLOUSES</h1>

        <h1 className="menu1">DRESSES</h1>

        <h1 className="menu1">JACKETS</h1>

        <h1 className="menu1">KNITWEAR</h1>

        <h1 className="menu1">SHIRTS</h1>


        <h1 className="menu1">SKIRTS</h1>
      

        <h1 className="menu1">TOPS</h1>

        <h1 className="menu1">TROUSERS</h1>

        <h1 className="menu1">ACCESSORIES</h1>
      </div>

        <h1 className="title1">DRESSES</h1>

      <div className="titles-container">
        <h2>FILTER</h2>
        <h2>SORT</h2>

      </div>


      <div className="card-dress-container">
        <section className="dress-card">
          <img className="photo" src={image1} alt=" Boho" />

          <div className="description-price">
          <h1 className="description">DRESS BOHO SOUL </h1>
          <h1 className="description">45 € </h1>
          </div>
            
        </section>
        <section className="dress-card">
          <img className="photo" src={image2} alt=" Mantra" />

          <div className="description-price">
          <h1 className="description">SUMMER MANTRA </h1>
          <h1 className="description">55 € </h1>
          </div>
        </section>
        <section className="dress-card">
          <img className="photo" src={image3} alt="Minimal " />

          <div className="description-price">
          <h1 className="description">DRESS MINIMAL</h1>
          <h1 className="description">45 €</h1>
          </div>
        </section>
        <section className="dress-card">
          <img className="photo" src={image4} alt="ocean" />

          <div className="description-price">
          <h1 className="description">DRESS OCEAN </h1>
          <h1 className="description">45 €</h1>
        
          </div>
        </section>
        <section className="dress-card">
          <img className="photo" src={image5} alt=" spirit" />

          <div className="description-price">
          <h1 className="description">DREES FREE SPIRIT </h1>
          <h1 className="description">50 € </h1>
        
          </div>
        </section>
        <section className="dress-card">
          <img className="photo" src={image6} alt=" Gypsy" />

          <div className="description-price">
          <h1 className="description">GYPSY DRESS </h1>
          <h1 className="description">50 € </h1>

          </div>
        </section>
      </div>
    </div>
  );
}
export default CategoryDresses;


