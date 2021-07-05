import "./Pickup.css";
import Pickup from "./Pickup";

const Online = () => {
    return ( 
        <div className="online-wrapper">
          <Pickup 
           className = "first"
           text={"Order and pick up. Easy as that."}
           para={"Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."} 
           btntext={"seek pickup options"}
           image = {"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"}
            
        />
          <Pickup text={"Floating into summer like…"} 
          para={"Keep the laid-back vibes going. Order Starbucks drinks on Uber Eats.**"} 
          btntext={"Order Now"} 
          image = {"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg"}
          />
        </div>
     );
}
 
export default Online;