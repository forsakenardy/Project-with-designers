import React from "react";
import { Link } from "react-router-dom";


function Menu(){

    return(
        <>
        <div className="menu-Content">
          <Link to="/" className={buttonClicked}>
            <h1 className='menu'>HOME</h1>
          </Link>
          <hr className="separator" />
          <Link to="/AllCategories" className={buttonClicked}>
            <h1 className='menu'>ALL CATEGORIES</h1>
          </Link>
          <hr className="separator" />
          <Link to="/Account" className={buttonClicked}>
            <h1 className='menu'>ACCOUNT</h1>
          </Link>
          <hr className="separator" />
          <Link to="/ProfessionalAccess" className={buttonClicked}>
            <h1 className='menu'>PROFESSIONAL ACCESS</h1>
          </Link>
        </div>

        <div className="Footer">
          <footer className='Footer'>
            <img src={FacebookIcon} alt="" />
            <img src={InstaIcon} alt="" /> 

          </footer>
        </div>

    </>

    );
}
export default Menu;