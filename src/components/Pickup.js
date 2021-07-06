import Button from "./Button";

const Pick = ({ text, para, btntext, image }) => {
  return (
    <div className="pickup">
      <img src={image} alt="" className="pc-img"/>
      <div className="text-wrapper">
        <h4>{text}</h4>
        <p>{para}</p>
        <Button
          title={btntext}
          color={"black"}
          bg={"transparent"}
          border={"black"}
        />
      </div>
    </div>
  );
};

export default Pick;
