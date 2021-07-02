import OrderText from "./OrderText";
import OrderImage from "./OrderImage";
import "./Order.css";


const Order = () => {
    return ( 
        <div className="order-wrapper">
            <OrderText title={"HAPPY PLACE FOUND"} para={"Nothing says summer like our Frappuccino® drinks. Treat yourself to the new Strawberry Funnel Cake, Mocha Cookie Crumble or Caramel Ribbon Crunch."}/>
            <OrderImage />
        </div>
     );
}
 
export default Order;