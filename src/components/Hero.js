import TextArea from "./TextArea";
import ImageArea from "./ImageArea";
import "./CSS/Hero.css";

const Hero = ({heading,para,btnText,bg,img}) => {
  return (
    <div className="hero-wrapper">
      <TextArea
        heading={heading}
        para={para}
        bg={bg}
        btnText={btnText}
      />

      <ImageArea  img={img}/>
    </div>
  );
};

export default Hero;
