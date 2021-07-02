import OrderText from "./OrderText";
import OrderImage from "./OrderImage";
import "./Order.css";


const Order = () => {
    return ( 
        <>
        <div className="order-wrapper">
            <OrderText title={"HAPPY PLACE FOUND"} para={"Nothing says summer like our Frappuccino® drinks. Treat yourself to the new Strawberry Funnel Cake, Mocha Cookie Crumble or Caramel Ribbon Crunch."} btntext={"Order Frappucino drink"} />
            <OrderImage img={"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72236.jpg"} />
        </div>

        <div className="order-wrapper">
            <OrderImage img={"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72037.jpg"} />
            <OrderText title={"DELIGHTFULLY CHILL"} para={"Refresh your day with the bright, tropical flavors of our Star Drink and Kiwi Starfruit Starbucks Refreshers® beverage."} btntext={"Order iced  beverage"} />
        </div>
        </>
     );
}
 
export default Order;