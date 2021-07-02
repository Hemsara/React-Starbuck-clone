import "./Navbar.css";
import logo from "./assets/starbucks-logo-2019.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <div className="left-wrapper">
        <img src={logo} alt="" />
        <ul>
          <li>Menu</li>
          <li>Rewards</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="right-wrapper">
        <div className="locate">
          <span>
            <LocationOnIcon />{" "}
          </span>
          Find a store
          <p></p>
        </div>
        <div className="buttons">
          <Button title={"Sign in"} color={"black"} bg={"white"}  border={"black"}/>
          <Button title={"Join now"} color={"white"} bg={"black"} border={"none"}/>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
