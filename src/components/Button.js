const Button = ({title,color,bg}) => {
  return (
    <>
      <button className="sign" style={{ color:color,backgroundColor:bg }}>{title}</button>
    </>
  );
};

export default Button;
