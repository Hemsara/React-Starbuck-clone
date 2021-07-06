import "./CSS/Footer.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React, { useState } from "react";

const Footer = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => {
        setClick(!click)
  }
  return (
    <footer>

      <div className="about list">
        <div className="header">
          <h2>About Us</h2>
          <span className="n-visible">
            <KeyboardArrowDownIcon onClick={handleClick}/>
          </span>
        </div>
        
        <div className={`${click ? "d-links" : "e-links"}`}>
          <p>Our Heritage</p>
          <p>Our Coffee</p>
          <p>Stories And News</p>
          <p>Investors Relation</p>
          <p>Policies and Standards</p>
          <p>Customer Service</p>
        </div>
      </div>


      <div className="career list">
        <div className="header">
          <h2>Careers</h2>
          <span className="n-visible">
            <KeyboardArrowDownIcon onClick={handleClick}/>
          </span>
        </div>
        
        <div className={`${click ? "d-links" : "e-links"}`}>
          <p>Our Heritage</p>
          <p>Our Coffee</p>
          <p>Stories And News</p>
          <p>Investors Relation</p>
          <p>Policies and Standards</p>
          <p>Customer Service</p>
        </div>
      </div>



      <div className="social list">
        <div className="header">
          <h2>Social Impact</h2>
          <span className="n-visible">
            <KeyboardArrowDownIcon onClick={handleClick}/>
          </span>
        </div>
        
        <div className={`${click ? "d-links" : "e-links"}`}>
          <p>Our Heritage</p>
          <p>Our Coffee</p>
          <p>Stories And News</p>
          <p>Investors Relation</p>
          <p>Policies and Standards</p>
          <p>Customer Service</p>
        </div>
      </div>


      <div className="business list">
        <div className="header">
          <h2>For Business Partners</h2>
          <span className="n-visible">
            <KeyboardArrowDownIcon onClick={handleClick}/>
          </span>
        </div>
        
        <div className={`${click ? "d-links" : "e-links"}`}>
          <p>Our Heritage</p>
          <p>Our Coffee</p>
          <p>Stories And News</p>
          <p>Investors Relation</p>
          <p>Policies and Standards</p>
          <p>Customer Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
