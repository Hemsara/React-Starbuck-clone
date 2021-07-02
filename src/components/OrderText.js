import Button from "./Button";

const OrderText = ({ title, para }) => {
  return (
    <div className="order-text-wrapper">
      <div className="text">
        <h1>{title}</h1>
        <p>{para}</p>
        <Button
          title={"Order Frappucino Drink"}
          color={"black"}
          bg={"transparent"}
          border={"black"}
        />
      </div>
    </div>
  );
};

export default OrderText;
