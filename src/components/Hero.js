import TextArea from "./TextArea";
import ImageArea from "./ImageArea";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <TextArea
        heading={"FREE COFFEE IS A TAP WAY"}
        para={"Join now to start earning Rewards."}
      />

      <ImageArea />
    </div>
  );
};

export default Hero;
