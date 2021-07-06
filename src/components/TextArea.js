import Button from "./Button";

const TextArea = ({ heading, para,bg ,btnText}) => {
  return (
    <div className="text-area" style={
      {
        backgroundColor:bg
      }
    }>
      <h2>{heading}</h2>
      <p>{para}</p>
      <Button title={btnText} color={"black"} bg={"transparent"}  border={"black"}/>

    </div>
  );
};

export default TextArea;
