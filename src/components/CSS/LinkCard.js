import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const LinkCard = ({title}) => {

    const [Show,setShow] = useState(true)

    const handleClick = () => {
        setShow(!Show)
  }
    return ( 
        <div className="about list">
        <div className="header">
          <h2>{title}</h2>
          <span className="n-visible">
              {Show? <KeyboardArrowDownIcon onClick={handleClick}/> : <ExpandLessIcon onClick={handleClick}/> }
            
          </span>
        </div>
        
        <div className={`${Show ? "d-links" : "e-links"}`}>
          <p className="links">Our Heritage</p>
          <p className="links">Our Coffee</p>
          <p className="links">Stories And News</p>
          <p className="links">Investors Relation</p>
          <p className="links">Policies and Standards</p>
          <p className="links">Customer Service</p>
        </div>
      </div>
     );
}
 
export default LinkCard;