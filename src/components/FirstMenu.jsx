import React from "react";
import { Link } from "react-router-dom";


function FirstMenu(){

    return(
        <>
        <div className="first-menu-Content">
         
          <Link to="/AllCategories" className={buttonClicked}>
            <h1 className='menu'>ALL CATEGORIES</h1>
          </Link>
          <Link to="/Sale" className={buttonClicked}>
            <h1 className='menu1'>SALE-60%</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>BLOUSES</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>DRESSES</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>JACKETS</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>KNITWEAR</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>SHIRTS</h1>
            <Link to="/" className={buttonClicked}>
            <h1 className='menu1'></h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>SKIRTS</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>TOPS</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>TROUSERS</h1>
          </Link>
          <Link to="/" className={buttonClicked}>
            <h1 className='menu1'>ACCESSORIES</h1>
          </Link>
          <hr className="separator" />
          </Link>
          <Link to="/Account" className={buttonClicked}>
            <h1 className='menu1'>ACCOUNT</h1>
          </Link>
          <hr className="separator" />
          <Link to="/ProfessionalAccess" className={buttonClicked}>
            <h1 className='menu1'>PROFESSIONAL ACCESS</h1>
          </Link>
        </div>

        

    </>

    );
}
export default FirstMenu;