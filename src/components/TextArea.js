import Button from "./Button";

const TextArea = ({ heading, para }) => {
  return (
    <div className="text-area">
      <h2>{heading}</h2>
      <p>{para}</p>
      <Button title={"Join now"} color={"black"} bg={"transparent"}  border={"black"}/>

    </div>
  );
};

export default TextArea;
