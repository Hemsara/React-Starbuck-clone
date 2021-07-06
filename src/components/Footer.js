import "./CSS/Footer.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LinkCard from "./CSS/LinkCard";
const Footer = () => {
  
  
  return (
    <footer>
      <LinkCard title={"About Us"} />
      <LinkCard title={"Careers"} />
      <LinkCard title={"Social Impact"} />
      <LinkCard title={"For Business Partners"} />
      <LinkCard title={"Order And Pickup"} />


    </footer>
  );
};

export default Footer;
